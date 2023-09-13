import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter} from 'react-router-dom'
import Pages from "./pages/Pages";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <div className="App">
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
    </div>
  );
}

export default App;
