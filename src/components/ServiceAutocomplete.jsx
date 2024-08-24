// src/components/ServiceAutocomplete.jsx
import React, { useState, useEffect } from 'react'
import { fetchData } from '../services/api'

const ServiceAutocomplete = ({ onSelect }) => {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        if (query.length < 3 || isSelected) {
            setSuggestions([])
            return
        }

        const fetchSuggestions = async () => {
            setLoading(true)
            const data = await fetchData(`service-part?search=${query}`)
            if (data) {
                setSuggestions(data)
            }
            setLoading(false)
        }

        const debounceTimeout = setTimeout(fetchSuggestions, 300)
        return () => clearTimeout(debounceTimeout)
    }, [query, isSelected])

    const handleSelect = (service) => {
        setQuery(service.title.rendered)
        setSuggestions([]);
        setIsSelected(true)
        onSelect(service)
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value)
        setIsSelected(false)
    };

    return (
        <div className="service-autocomplete">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Digite para buscar serviços/peças..."
            />
            {loading && <div>Carregando...</div>}
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((service) => (
                        <li
                            key={service.id}
                            onClick={() => handleSelect(service)}
                            className="suggestion-item"
                        >
                            {service.title.rendered}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ServiceAutocomplete
