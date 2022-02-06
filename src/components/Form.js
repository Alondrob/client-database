import React, { useState } from 'react';

import { data, size } from '../utils/data';
import './Form.css'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { MenuItem, List, RadioGroup, Radio, ToggleButton, Checkbox } from '@mui/material';
import { fontWeight } from '@mui/system';



const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [budget, setBudget] = useState('')
    const [area, setArea] = useState('')
    const [neighborhoods, setNeighborhoods] = useState([])

    const [bdr, setBdr] = useState([]);
    const [color, setColor] = useState(false)



    // const handleSubmit = () => {
    //    let data =   {
    //                     name: name,
    //                     email: email, 
    //                     phone: phone, 
    //                     budget: budget, 
    //                     area: area,
    //                     neighborhoods: neighborhoods,
    //                     bdr: bdr
    //                 }

    //     let obj = { method: 'post', headers: { 'contentype': 'application/json', accept:'application/json'}, body: JSON.stringify(data)}

    //     fetch(url, obj)
    //     .then(() => {window.location.href="/submited"})
    // }




    const distinctBorroughs = [...new Set(data.map(item => item.Borough))]

    console.log(distinctBorroughs)

    console.log(neighborhoods)

    const neiArr = data.filter((value) => value.Borough === area)

    console.log(neiArr)

    const handleClick = (value) => {
        if (bdr.includes(value)) {
            return alert("This Apt size already has been chosen")
        }
        setBdr([...bdr, value])
        // setColor(!color)
        // console.log(color)
        //console
    }


    //   const handleSubmit = (e) => {
    //         e.preventDefault();
    //     }

    const handleCheckbox = (value) => {
        // if (neighborhoods.length < 6 && !neighborhoods.includes(value)) {
        //     setNeighborhoods([...neighborhoods, value])
        // }
        // else {
        //     alert("Please slelect up to 5 unselected neghborhoods")
        // } 
        if (neighborhoods.includes(value)) {
            let selectedNei = neighborhoods.filter((item) => item != value)
            setNeighborhoods(selectedNei)
        }
        else if (neighborhoods.length >= 5) {
            alert("Please Choose Up to Five Neighborhoods")
        }
        else {
            setNeighborhoods([...neighborhoods, value])
        }
    }


    const handleRadio = () => {
        console.log('hello')
    }


    return (
        <Container>
            <form className='form' >
                <div>

                    <TextField
                        color='red'
                        type='text'
                        id='filled-basic'
                        label='Full Name:'
                        variant='filled'
                        color='secondary'
                        fullWidth
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br></br>
                    <TextField
                        type='tel'
                        id='filled-basic'
                        label='Phone Number:'
                        variant='filled'
                        fullWidth
                        onChange={(e) => setPhone(e.target.value)}

                    />
                    <br></br>
                    <TextField
                        margin='normal'
                        type='email'
                        id='filled-basic'
                        label='Email:'
                        variant='filled'
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br></br>

                    <br></br>
                    <TextField
                        margin='normal'
                        name='Budget'
                        label='What Is Your Max Budget ?'
                        type='number'
                        inputProps={{ style: { fontSize: 20, fontWeight: 600 } }}
                        style={{ width: "12cm", backgroundColor: "lightgrey", color: 'red', fontWeight: 900, fontSize: 15 }}
                        onChange={(e) => setBudget(e.target.value)}
                    />

                    <h4>What Size Apartment Are You Looking For ?</h4>
                    {size.map((value, i) => <ToggleButton selected={bdr.includes(value)} onClick={() => handleClick(value)}> {size[i]} </ToggleButton>)}


                    <h3>Where Would You Want To Live ?</h3>
                    <div> </div>   <br></br>
                    <br></br>
                    <Select
                        onChange={(e) => setArea(e.target.value)}
                        style={
                            {
                                width: '10cm',
                                height: '1.5cm',
                                color: 'white',
                                backgroundColor: 'green',
                                fontSize: '50px',
                                fontWeight: '500px',
                                marginBottom: '1cm'
                            }}


                    >
                        {distinctBorroughs.map((value, i) =>
                            <MenuItem value={value}
                                style={{ color: 'red', backgroundColor: 'lightblue', fontWeight: '400px', position: 'relative', textAlign: 'center' }}

                            >

                                {value}
                            </MenuItem>)}
                    </Select> <br></br>

                </div>


                {neiArr.map((value, i) =>

                    <div style={{ fontSize: '0.55cm', fontWeight: 900, fontFamily: 'cursive' }}>

                        <Checkbox
                            onClick={() => handleCheckbox(value.Neghborhood)}>

                        </Checkbox>

                        {value.Neghborhood}
                    </div>

                )}




            </form>



        </Container >
    )
}

export default Form;
