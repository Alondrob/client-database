import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';

import { data } from './utils/data';

const App = () => {
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    borrough: '',
    budget: '',
    neighborhoods: [],
    size: []
  })
  


  
  

  return (
    <Form/>
  );
}

export default App;
