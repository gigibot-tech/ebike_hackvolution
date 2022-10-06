import logo from './logo.svg';
import './App.css';
import NavbarH from './components/Navbar';
import HomeController from './components/HomeController';

function App() {
  return (
    <div className="App">
    <iframe 
      width="100%"
      length="100%"
      src="http://localhost:3000/BikeCustomizer/index.html"
    >
    </iframe>
      <NavbarH  />
      <HomeController />
    </div>
  );
}

export default App;
