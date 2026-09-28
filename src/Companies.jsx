import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Companies.css'
import { useContext, useEffect, useState } from "react";
import JobContext from "./JobContext";
import { useNavigate } from "react-router-dom";
const Companies = () => {
  const [selected,setSelected] = useState('1')
  const [category,setCategory] = useState('')
  const {companies} = useContext(JobContext)
  const [search,setSearch] = useState('')
  const navigate = useNavigate()
  let tempcompanies = [...companies]
  if(category){
    tempcompanies = tempcompanies.filter(companies=>companies.industry.toLowerCase()==category.toLowerCase())
  }

  const [currentpage,setCurrentpage] = useState(1)
  const jobsPerPage = 6;
  const start = (currentpage -1) * jobsPerPage
  const end = start + jobsPerPage
  tempcompanies = tempcompanies.slice(start,end)

  const handlePagination = (message) =>{
    if(message=="before"){
      setCurrentpage(currentpage-1)
      setSelected(`${currentpage-1}`)
    }
    else{
      setCurrentpage(currentpage+1)
      setSelected(`${currentpage+1}`)
    }
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
    })
  }

  const handleCategory = (category)=>{
    setCategory(category)
  }

  useEffect(()=>{
    setSelected("1")
    setCurrentpage(1)
  },[category])

  if(search){
    tempcompanies= tempcompanies.filter((company) => company.name.toLowerCase().includes(search.toLowerCase()))
  }

  

  return (
      <div className="companies">
          <div className="header">
            <h2>Companies</h2>
            <p>Find companies and explore the opportunities they offer.</p>
            <label>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input placeholder="Search companies...  " value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            </label>
          </div>
          <div className="explore">
            <p>EXPLORE BY INDUSTRY</p>
            <div>
              <div onClick={()=>handleCategory("Technology")}>
                <img src="/images/technologycategory.jfif"/>
                <p>Technology</p>
              </div>
              <div onClick={()=>handleCategory("Design")}>
                <img src="/images/designcategory.jfif"/>
                <p>Design</p>
              </div>
              <div onClick={()=>handleCategory("Business")}>
                <img src="/images/businesscategory.jfif"/>
                <p>Business</p>
              </div>
              <div onClick={()=>handleCategory("Marketing")}>
                <img src="/images/marketingcategory.jfif"/>
                <p>Marketing</p>
              </div>
              <div onClick={()=>handleCategory("Finance")}>
                <img src="/images/financecategory.jfif"/>
                <p>Finance</p>
              </div>
              <div onClick={()=>handleCategory("Engineering")}>
                <img src="/images/engineeringcategory.jfif"/>
                <p>Engineering</p>
              </div>
              <div onClick={()=>handleCategory("Fashion")}>
                <img src="/images/fashioncategory.jfif"/>
                <p>Fashion</p>
              </div>
              <div onClick={()=>handleCategory("Data")}>
                <img src="/images/datacategory.jfif"/>
                <p>Data</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>
                <p onClick={()=>handleCategory("")} style={{cursor:"pointer"}}>All Companies</p>
                {category ? <p>{category}</p> : ""}
              </p>
              <p>{tempcompanies.length}</p>
            </div>
            <div>
              {tempcompanies.map((company)=>(
                <div className="companylist" onClick={()=>navigate(`/companyinfo/${company.id}`)}>
                  <img src={company.img}/>
                  <div className="companyinfo">
                    <p>{company.name}</p>
                    <p>{company.industry} · {company.location}</p>
                    <p>{(company.description)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button disabled={currentpage==1 ? true : false} onClick={()=>handlePagination("before")}><FontAwesomeIcon icon={faArrowLeft}/></button>
              <button className={selected=="1" ? "selected" : ""} >1</button>
              <button className={selected=="2" ? "selected" : ""} >2</button>
              <button className={selected=="3" ? "selected" : ""} >3</button>
              <button disabled={currentpage==3 || tempcompanies.length<6 ? true : false} onClick={()=>handlePagination("next")} ><FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
          </div>
      </div>
  );
}
 
export default Companies;