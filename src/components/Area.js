import { data } from "../utils/data";
import './Area.css';
import React, {useState} from 'react'
import Neighborhood from "./Neighborhood";
import { getValue } from "@testing-library/user-event/dist/utils";
import Zipcode from "./Zipcode";
import Basket from "./Basket";

const Area = () => {

    const [borrough, setBorrough] = useState("")
    const [color, setColor] = useState(false)
    // const [neighborhoods, setNeighborhoods] = useState([]);
   
    
const handleClick = (e) => {
    console.log(e)
    setColor(!color);
}
 
            

    const onSelect = (e) => {
        setBorrough(e.target.value);
    }

    const filteredData = data.filter((value) => {
        if (value.name === borrough.toLowerCase()){
            return value
        }
        else {
            return;
        }
    })

    const secondFiltered = filteredData[0]["neighborhoods"].sort();

    console.log(secondFiltered)

    const clickHandler = () => {
        let zipArray = filteredData.map((value) => {
            return value.zipcode
        })
        
        console.log(secondFiltered)
    }

    

   
    return (
        <div>
            <select  onChange={onSelect} onClick={clickHandler} value={borrough}>
                {data.map((val) =>
                    <option>{val.name.toUpperCase()} </option>
                )} 
            </select><br></br><br></br>
            <Basket/>
            
            {secondFiltered.map((val) => <Neighborhood neighborhood={val} />)}   
        </div>
          
           
               
          
            
            
            
           
                
            
        
    )
}

export default Area



