import React from 'react'
import faker from 'faker'

export const Post = () => {
    return (
        <div>
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar" href="/">
                        <img alt="avatar" src="https://source.unsplash.com/random" />
                    </a>
                    <div className="content">
                        <a className="author" href="/">Danail</a>
                        <div className="metadata">
                            <div className="date">2 days ago</div>
                        </div>
                        <div className="text">
                            New post!
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
