import { useContext, useState } from 'react';
import './bycategory.css'
import JobContext from './JobContext';
import { useNavigate } from 'react-router-dom';

const Bycategory = () => {
    const {filter,setFilter,setSelected} = useContext(JobContext)
    const navigate = useNavigate()
    function handleclick(category){
        setFilter({...filter,category:category})
        navigate("/find")
        setSelected("find")
    }

    return (
        <div className="bycategory">
            <div>
                <h2>Explore By Category</h2>
                <p>Find opportunities built around it.</p>
                <div onClick={()=>handleclick("technology")} >
                    <p>01</p>
                    <div>
                        <p>TECHNOLOGY</p>
                        <p>Build the future with code.</p>
                        <ul>
                            <li>Frontend Developer</li>
                            <li>Backend Developer</li>
                            <li>Full Stack Developer</li>
                            <li>Mobile App Developer</li>
                            <li>DevOps Engineer</li>
                            <li>Cloud Engineer</li>
                            <li>Cybersecurity Analyst</li>
                            <li>QA Engineer</li>
                            <li>IT Support Specialist</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
                <div onClick={()=>handleclick("design")}>
                    <p>02</p>
                    <div>
                        <p>DESIGN</p>
                        <p>Turn ideas into experiences.</p>
                        <ul>
                            <li>UI Designer</li>
                            <li>UX Designer</li>
                            <li>Product Designer</li>
                            <li>UX Researcher</li>
                            <li>Graphic Designer</li>
                            <li>Brand Designer</li>
                            <li>Motion Designer</li>
                            <li>Web Designer</li>
                            <li>Visual Designer</li>
                            <li>Design Intern</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
                <div onClick={()=>handleclick("business")}>
                    <p>03</p>
                    <div>
                        <p>BUSINESS</p>
                        <p>Lead, grow and build.</p>
                        <ul>
                            <li>Business Analyst</li>
                            <li>Project Manager</li>
                            <li>Product Manager</li>
                            <li>Operations Manager</li>
                            <li>Business Development Representative</li>
                            <li>Sales Representative</li>
                            <li>Account Manager</li>
                            <li>Marketing Manager</li>
                            <li>Financial Analyst</li>
                            <li>Human Resources Specialist</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
                <div onClick={()=>handleclick("marketing")}>
                    <p>04</p>
                    <div>
                        <p>MARKETING </p>
                        <p>Make ideas impossible to ignore.</p>
                        <ul>
                            <li>Digital Marketing Specialist</li>
                            <li>Social Media Manager</li>
                            <li>Content Strategist</li>
                            <li>SEO Specialist</li>
                            <li>Copywriter</li>
                            <li>Content Writer</li>
                            <li>Brand Strategist</li>
                            <li>Communications Specialist</li>
                            <li>Email Marketing Specialist</li>
                            <li>Marketing Intern</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
                <div onClick={()=>handleclick("finance")}>
                    <p>05</p>
                    <div>
                        <p>FINANCE</p>
                        <p>Turn numbers into smarter decisions.</p>
                        <ul>
                            <li>Financial Analyst</li>
                            <li>Accountant</li>
                            <li>Investment Analyst</li>
                            <li>Auditor</li>
                            <li>Tax Associate</li>
                            <li>Financial Advisor</li>
                            <li>Risk Analyst</li>
                            <li>Credit Analyst</li>
                            <li>Treasury Analyst</li>
                            <li>Finance Intern</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
                <div onClick={()=>handleclick("engineering")}>
                    <p>06</p>
                    <div>
                        <p>ENGINEERING</p>
                        <p>Design solutions that move the world.</p>
                        <ul>
                            <li>Mechanical Engineer</li>
                            <li>Electrical Engineer</li>
                            <li>Civil Engineer</li>
                            <li>Chemical Engineer</li>
                            <li>Industrial Engineer</li>
                            <li>Biomedical Engineer</li>
                            <li>Environmental Engineer</li>
                            <li>Aerospace Engineer</li>
                            <li>Structural Engineer</li>
                            <li>Engineering Intern</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
                <div onClick={()=>handleclick("fashion")}>
                    <p>07</p>
                    <div>
                        <p>FASHION</p>
                        <p>Make a difference where it matters most.</p>
                        <ul>
                            <li>Registered Nurse</li>
                            <li>Medical Assistant</li>
                            <li>Pharmacist</li>
                            <li>Medical Laboratory Technician</li>
                            <li>Healthcare Administrator</li>
                            <li>Radiology Technician</li>
                            <li>Physiotherapist</li>
                            <li>Public Health Specialist</li>
                            <li>Clinical Research Associate</li>
                            <li>Healthcare Intern</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
                <div onClick={()=>handleclick("data")}>
                    <p>08</p>
                    <div>
                        <p>DATA</p>
                        <p>Make a difference where it matters most.</p>
                        <ul>
                            <li>Registered Nurse</li>
                            <li>Medical Assistant</li>
                            <li>Pharmacist</li>
                            <li>Medical Laboratory Technician</li>
                            <li>Healthcare Administrator</li>
                            <li>Radiology Technician</li>
                            <li>Physiotherapist</li>
                            <li>Public Health Specialist</li>
                            <li>Clinical Research Associate</li>
                            <li>Healthcare Intern</li>
                        </ul>
                    </div>
                    <p>⟶</p>
                </div>
            </div>
        </div>
    );
}
 
export default Bycategory;