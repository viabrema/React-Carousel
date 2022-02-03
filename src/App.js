import './App.css';
import Carousel from './components/carousel';
import photo from './assets/photo01.jpg';

function App() {
  return (
    <div className="App">
      <Carousel qtyChildren={3}>
        <div className="carousel-item">codando...</div>
        <div className="carousel-item">
          <img src={photo} alt="Momento de descontração" />
        </div>
        <div className="carousel-item">...e sorrindo...</div>
      </Carousel>
    </div>
  );
}

export default App;
