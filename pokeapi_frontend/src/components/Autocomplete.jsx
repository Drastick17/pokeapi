import React from 'react'
import { useState } from 'react'
import {Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSearch } from '../hooks/useSearch'

const Autocomplete = () => {
  const [name, setName] = useState('')
  const {pokemons, loading} = useSearch(name)
  const handleChange = (e) =>{
    setName(e.target.value)
  }
  return (
    <div className='position-relative'>
      <input onChange={handleChange} className="p-2 rounded" autocomplete="off" type="text" name="name" placeholder="Busca un pokemon" value={name} />
      {loading && name.trim() >= 1
      ?<div className='text-center'><Spinner/></div>
      :<ul className='position-absolute bg-light px-5 rounded border border-dark mt-2' style={{zIndex:'10'}}>
        {pokemons.map(({name},i) => i < 5 ?<li className='list-group-item p-1 text-capitalize'><Link onClick={() => setName('')} className='text-decoration-none text-dark' to={`/${name}`}>{name}</Link></li>:'')}
      </ul>
      }
    </div>
  )
}

export default Autocomplete