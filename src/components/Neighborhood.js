import React from 'react'

const  Neighborhood = ({dataSet}) => {


console.log(dataSet)
    return (
        <div>
            {dataSet.map((value) => {
                return <div> {value.neighborhoods}</div>
            })}
        </div>
    )

}
export default Neighborhood
