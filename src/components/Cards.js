import React from 'react'
import Card from './Card'

//Importando las imagenes
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

//Fontaweasome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


const cards = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faInstagram}/>,
        image: image1,
        description: 'Here you can follow me on my social network, where I will be uploading. =)',
        url: 'https://www.instagram.com/marcordz___/',
        btnName: 'Go to Instagram'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faGithub}/>,
        image: image3,
        description: "Here you will find my repositories of the projects I've done over time",
        url: 'https://github.com/Magno-Web',
        btnName: 'Go to GitHub'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faLinkedin}/>,
        description: 'Here you will find my portfolio of my knowledge about web development.',
        image: image2,
        url: 'https://www.linkedin.com/in/magno-dev/',
        btnName: 'Go to LinkedIn'
    },
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
           <div className="row">
               {
                   cards.map(card =>(
                        <div className="col-md-4" key={card.id}>
                            <Card icon={card.icon} imageSource={card.image} buttonURL={card.url} textDescription={card.description} btn={card.btnName}/>
                        </div>
                   ))
               }
           </div>
        </div>
    )
}

export default Cards
