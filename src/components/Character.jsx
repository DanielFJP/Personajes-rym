import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Layout/Header'
import Card from 'react-bootstrap/Card'
import './character.css'


function Character() {
    const params = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then((res) => setCharacter(res.data))
            .then((res)=>console.log(res.data))
    })
    
  return (
      <>
          
              <Header />
              <Card className="personaje">
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                      <Card.Title className='Nombre'>{character.name}</Card.Title>
                      <Card.Text>
                          <h2>Sobre el Personaje</h2>
                          <ul>
                              <li> <strong>Status= </strong>{character.status}</li>
                              <li><strong>Species=</strong> {character.species}</li>
                              <li><strong>Type=</strong>{character.type}</li>
                          <li><strong>Gender=</strong>{character.gender}</li>
                          </ul>



                      </Card.Text>
                  </Card.Body>
              </Card> 
          
          
      </>
  )
}

export default Character