import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import '../../scss/patternPage.scss'

const PatternPage = () => {
    const { id } = useParams()
    const [pattern, setPattern] = useState({})

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/patterns/${id}`)
            .then(res => {
                console.log(res.data)
                setPattern(res.data[0])
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="patternPage">
            <h2>{pattern.name}</h2>
            <img src={pattern.image_url} alt={pattern.name} />
            <p>{pattern.description}</p>
            <p>{pattern.price}</p>
        </div>
    )
}

export default PatternPage