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

    

    console.log(filteredData);
   
    
    return (
        <div>
            <select onChange={onSelect} value={borrough}>
                {data.map((val) =>
                    <option>{val.name.toUpperCase()} </option>
                )} 
            </select>
            <li>
                {filteredData.map(value => <p>{value.zipcode}</p>)}
            </li>
            
            
            
           
                
            
        </div>
    )
}

export default Area



