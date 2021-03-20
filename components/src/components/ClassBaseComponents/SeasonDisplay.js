import React from 'react'


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

export const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth())
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
    const icon = season === 'winter' ? 'snowflake' : 'sun'
    return (
        <div>
            <i className={`${icon} icon`}></i>
            <h1>{text}</h1>
            <i className={`${icon} icon`}></i>
        </div>
    )
}
