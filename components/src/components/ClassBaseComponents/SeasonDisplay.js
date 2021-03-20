import React from 'react'
import './SeasonDisplay.css'


const seasonConfig = {
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    },
    summer: {
        text: "Let`s hit the beach",
        iconName: 'sun'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

export const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}
