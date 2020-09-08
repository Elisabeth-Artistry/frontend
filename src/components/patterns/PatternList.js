import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../../scss/patternList.scss'

import PatternCard from './PatternCard'

const PatternList = () => {
    const [patterns, setPatterns] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/patterns")
            .then(res => {
                console.log(res.data)
                setPatterns(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="patternList">
            {patterns.map(pattern => 
                <PatternCard key={pattern.id} pattern={pattern} />
            )}
        </div>
    )
}

export default PatternList