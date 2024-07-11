import React, { useEffect, useState } from 'react'

export const Nav = ({data,setResult}) => {

const [value,setValue] = useState('')

    function search(e) {
        setValue(e.target.value)
        
    }
    console.log(value);
    useEffect(()=>{
        const filter = data.filter((d)=>d.name.toLowerCase().includes(value.toLowerCase()))
        setResult(filter)
        console.log(filter);
    },[value])

    return (
        <nav className='nav'>
            <h2>Cards Users</h2>
            <div>
                <label htmlFor="input"></label>
                <input type="text" name="" id="input" placeholder='Add name user' onChange={search}/>
            </div>
        </nav>
    )
}
