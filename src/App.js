import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter} from 'react-router-dom'
import Pages from "./pages/Pages";
import { AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "./components/context/AuthContext";


function App() {
  return (
    <div className="App">
    <AnimatePresence mode="wait">
      <AuthContextProvider>      
        <BrowserRouter>
          <Navbar />
          <Pages />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </AnimatePresence>
    </div>
  );
}

export default App;
