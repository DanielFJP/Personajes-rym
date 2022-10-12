import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Layout/Header'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then((res)=> setCharacters(res.data.results))
    })
    return (
      <>
          <Header /> 
            <h1>PERSONAJES RICK AND MORTY</h1>
            
            <ul className='Lista'>
                {
                    characters.map((character) => {
                        return (
                            <li><Link to={`/character/${character.id}`}>{character.name}</Link></li>
                        )
                    })
                }
            </ul>
           

          
      </>
  )
}

export default Home
