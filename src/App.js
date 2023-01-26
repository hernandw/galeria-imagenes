import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header titulo="Galeria de Imágenes con React" />
      <div className="row">
      <Card
        titulo="Montaña Figi"
        imagen="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        descripcion='Austria'
      />
      <Card
        titulo="Montaña Everest"
        imagen="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        descripcion='Austria'
      />
      <Card
        titulo="Montaña Parinacota"
        imagen="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        descripcion='Chile'
      />
      </div>
      <button type="button" class="btn btn-success my-5 d-grid gap-2 col mx-auto">Mostrar más imágenes</button>
      <Footer />
    </div>
  );
}

export default App;
