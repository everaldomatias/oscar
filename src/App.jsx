import './styles/main.scss';
import Posts from './components/Posts';
import ServiceAutocomplete from './components/ServiceAutocomplete'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to Oscar!</h1>
        <div className="section">
          <ServiceAutocomplete />
        </div>
      </div>
    </div>
  );
}

export default App;