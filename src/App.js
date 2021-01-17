import logo from "./logo.svg";
import "./App.css";
import Navbar from "./layout/Nav";
import Carousel from "./layout/Head";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
