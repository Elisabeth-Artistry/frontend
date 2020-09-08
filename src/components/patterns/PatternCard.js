import React from 'react'

const PatternCard = ({ pattern }) => {

    return (
        <div className="patternCard">
            <h3>{pattern.name}</h3>
            <img src={pattern.image_url} alt={pattern.name} />
            <p>{pattern.description}</p>
        </div>
    )
}

export default PatternCard