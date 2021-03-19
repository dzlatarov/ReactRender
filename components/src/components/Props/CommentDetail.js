import React from 'react'

export const CommentDetail = ({ author, time, comment, imgSrc }) => {
    return (
        <div>
            <div className="comment">
                <a className="avatar" href="/">
                    <img alt="avatar" src={imgSrc} />
                </a>
                <div className="content">
                    <a className="author" href="/">{author}</a>
                    <div className="metadata">
                        <div className="date">{time}</div>
                    </div>
                    <div className="text">
                        {comment}
                    </div>
                </div>
            </div>
        </div>
    )
}
