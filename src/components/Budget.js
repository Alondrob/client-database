import React, {useState, useEffect} from 'react'

// const Price = () => {

//     const arr = [1500]
//     return (
//         <div>
//                 {for(let i=0, i<100, i++) {
//                     <select>
//                         <option> i + 100 </option>
//                     </select>
//                 }}
//         </div>
//     )
// }

// export default Price



const Budget = () => {

   const [cost, setCost] = useState([]);

    // const price = () => {
        
    //     for(let i = 0; i<100; i+=100) {
    //         let startingPoint = 1500;
    //         let incrementedNum = i + startingPoint
    //         setPrices(incrementedNum)
    //     } 

    //     console.log(prices)
    // }

    const prices = () => {
        let priceArr = [];
        for (let i = 1500; i < 10100; i += 100) {
            priceArr.push(i) 
        }
        return priceArr;
    }

    const priceVar = prices();
  

  
    

    return (
        <div>
            <select>
                {priceVar.map((value) =>
                    <option> ${value} </option>
                )}
            </select>
           
        </div>
    )
}

export default Budget;