import { data } from "../utils/data";

import React, {useState} from 'react'
import Neighborhood from "./Neighborhood";
import { getValue } from "@testing-library/user-event/dist/utils";

const Area = () => {

    const [borrough, setBorrough] = useState("")
    // const [neighborhoods, setNeighborhoods] = useState([]);
   
    

 console.log(data)
            

    const onSelect = (e) => {
        setBorrough(e.target.value);
    }

    const filteredData = data.map((value) => {
        if (value.name === borrough.toLowerCase()){
            return value.neighborhoods
        }
        else {
            return ""
        }
    })

    const secondFiltered = filteredData.filter((val) => val.length > 0)



    const clickHandler = () => {
        let zipArray = filteredData.map((value) => {
            return value.zipcode
        })
        
        console.log(filteredData)
    }

    let dataArray = clickHandler();
    console.log(dataArray);
   
    
    return (
        <div>
            <select onChange={onSelect} onClick={clickHandler} value={borrough}>
                {data.map((val) =>
                    <option>{val.name.toUpperCase()} </option>
                )} 
            </select>
           
                <div>
                    {dataArray}
                </div>
          
            
            
            
           
                
            
        </div>
    )
}

export default Area



