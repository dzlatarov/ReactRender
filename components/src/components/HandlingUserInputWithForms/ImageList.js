import './ImageList.css'
import React from 'react'

export const ImageList = ({ images }) => {
    const imageList = images.map(({ id, description, urls }) => {
        return <img key={id} alt={description} src={urls.regular} />
    })

    return (
        <div className="image-list">
            {imageList}
        </div>
    )
}
