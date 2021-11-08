import React from 'react'

import PropTypes from 'prop-types'

import './cards.css'

function card({icon, imageSource, textDescription , buttonURL, btn}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{icon}</h4>
                <p className="card-text text-secondary">{
                    textDescription ? textDescription : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, harum quasi? Molestias placeat maiores architecto porro autem commodi tempora adipisci magni. Id unde distinctio iusto quas voluptatibus nihil ea assumenda?'
                }</p>
                <a href={buttonURL} className="btn btn-outline-secondary rounded-0" target="_blank">
                    {btn}
                </a>
                
            </div>
        </div>
    )
}

card.propTypes = {
    title: PropTypes.string.isRequired,
    buttonURL: PropTypes.string,
    imageSource: PropTypes.string,
    textDescription: PropTypes.string
}

export default card
