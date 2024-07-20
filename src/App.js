import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Day from './components/Day';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Day  />
      </div>
      <Footer />
    </>
  );
}

export default App;
