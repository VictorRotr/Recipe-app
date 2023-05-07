import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const[input, setInput]=useState("");
    const navigate = useNavigate();

    const submitHandler=(e) => {
        e.preventDefault();
        navigate('/searched/'+ input)
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
margin: 0rem 20rem;
position:relative;
min-width:100px;
div{
    width:100%;
    position:relative;
}
input{
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color:white;
    padding:1ren 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:100%;
    margin-left:20px;
}
svg{
    position:absolute;
    top:30%;
    left:0%
    transform: translate(100%, -50%);
    color:black;
}
`

export default Search