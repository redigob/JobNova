import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import { useContext,useEffect, useState } from "react";
import JobContext from "./JobContext";
import Dashboard from "./Dashboard";
import FindJobs from "./findJobs";
import Clearshow from "./Clearshow";
import Profile from "./Profile";
import Companies from "./Companies";
import Companyinfo from "./Companyinfo";
import Jobdetail from "./Jobdetail";
import Application from "./Application";
import Saved from "./Saved";
import Footer from "./Footer";
const App = () => {
    const {loggedin} = useContext(JobContext)
    const navigate = useNavigate()
    const navigation = performance.getEntriesByType("navigation")[0];

    useEffect(() => {
        if (navigation.type === "reload") {
            navigate("/");
        }
    }, []);

    return (
        <div className="app">
            <Navbar/>
            <Clearshow/>
            <Routes>
                <Route path="/" element={loggedin ? <Dashboard/> :<Home/>}></Route>
                <Route path="/find" element={<FindJobs/>}></Route>
                <Route path="/myprofile" element={<Profile/>}></Route>
                <Route path="/company" element={<Companies/>}></Route>
                <Route path={`companyinfo/:id` }element={<Companyinfo/>}></Route>
                <Route path={`jobdetail/:id`  }element={<Jobdetail/>}></Route>
                <Route path={`find/jobdetail/:id` }element={<Jobdetail/>}></Route>
                <Route path={`saved/jobdetail/:id` }element={<Jobdetail/>}></Route>
                <Route path={`applications` }element={<Application/>}></Route>
                <Route path={`saved` }element={<Saved/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}
 
export default App;