import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </div>
    );
}
 
export default App;