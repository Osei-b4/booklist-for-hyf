import "./App.css";
import { Routes, Route} from "react-router-dom";
import Booklist from "./components/Booklist";
import Flex from "./components/Flex";
import Navbar from "./components/Navbar";
import Favlist from "./components/Favlist";
import Footer from "./components/Footer";


function App() {
    return(
        <>
        <p></p>


         <Navbar/>
        <Routes>
            <Route path="/" element={<Booklist/>}/>
            <Route path="/" element={<Favlist/>}/>
            <Route path="/Flex/:id" element={<Flex/>}/>
            <Route path="/Footer" element={<Footer/>}/>
          </Routes>
            <Footer/>
        </>

    )
}
export default App



