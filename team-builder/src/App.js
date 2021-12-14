import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form'
import Member from './Member';


const initialFormValues = {
  name:'',
  email:'',
  role: '',
}

function App() {
  const [member, setMember] = useState ([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }
  const submitForm = () => {

    const newMember = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      role: formValues.role
    }
  if (!newMember || !newMember.email || !newMember.role){
    setError('All field are required!');
  } else{
    setMember(member.concat(newMember));
    setFormValues(initialFormValues)
  }
}
  return (
    <div className="App">
      <h1>Team Builder!</h1>
      <h2>{error}</h2>
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
        member.map((member,idx) => {
          return (
            <Member key={member.idx} details={member}/>
          )
        })
      }
    </div>
  );
}

export default App;
