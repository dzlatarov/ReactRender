import React from 'react'

export const ImageList = ({ images }) => {
    const imageList = images.map(({ id, description, urls }) => {
        return (
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img key={id} alt={description} src={urls.regular} />
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {imageList}
        </>
    )
}
