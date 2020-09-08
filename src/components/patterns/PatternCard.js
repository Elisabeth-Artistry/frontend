import React from 'react'
import { Link } from 'react-router-dom'

import '../../scss/patternCard.scss'

const PatternCard = ({ pattern }) => {

    return (
        <div className="patternCard">
            <h3>{pattern.name}</h3>
            <img src={pattern.image_url} alt={pattern.name} />
            <p>{pattern.description}</p>
            <Link to={`pattern/${pattern.id}`}>View Details</Link>
        </div>
    )
}

export default PatternCard