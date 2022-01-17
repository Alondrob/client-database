import React, {useState} from 'react';
import Area from './Area';
import './Area.css';
import Basket from './Basket';

const  Neighborhood = ({neighborhood}) => {

    const [color, setColor] = useState(false)
    const [added, setAdded] = useState(false)
    const [pickedAreas, setPickedAreas] = useState([]);

    
    const handleClick = () => {
        console.log(pickedAreas)
        setColor(!color);
        setAdded(!added)
        setPickedAreas(neighborhood)
    }

    
    return (
        <div>
            
            <Basket pickedArea={added ? neighborhood.zipcode : ""} />
            <div>

                {neighborhood.zipcode}&nbsp;&nbsp;&nbsp;
                <button className={color ? "colorTrue" : "colorFalse"} onClick={handleClick}>{added ? "Added" : "Add"}</button>
               

            </div>
        </div>
        
    )

}
export default Neighborhood
