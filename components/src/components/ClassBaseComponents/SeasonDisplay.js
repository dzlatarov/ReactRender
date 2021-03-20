import React from 'react'


const getSeason = (lat, month) => {
    console.log(month);
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter'
    } else {
        return lat > 0 ? 'Winter' : 'Summer'
    }
}

export const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth())

    return (
        <div>
            {season} right now.
        </div>
    )
}
