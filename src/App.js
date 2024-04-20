import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/navbar";
import ScrollContent from "./components/ScrollContent/ScrollContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollContent />
      <Footer />
    </div>
  );
}

export default App;
