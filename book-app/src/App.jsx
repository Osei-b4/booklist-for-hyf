import "./App.css";
import { Routes, Route} from "react-router-dom";
import Navigation from "./componets/Navigation";
import Booklist from "./componets/Booklist";
import Bookcard from "./componets/Bookcard"
import Footer from "./componets/Footer";

function App() {
    return(
        <>
        <p></p>

<Footer>
         <Navigation/>
         
        <Routes>
            <Route path="/" element={<Booklist/>}/>
            <Route path="/" element={<Navigation/>}/>
            <Route path="//:id" element={<Bookcard/>}/>
            <Route path="/Footer" element={<Footer/>}/>
          </Routes>
           </Footer>
        </>

    )
}
export default App