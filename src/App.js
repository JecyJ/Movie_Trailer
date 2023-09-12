import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter} from 'react-router-dom'
import Pages from "./pages/Pages";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
