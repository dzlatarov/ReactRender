import React from 'react'
import { CommentDetail } from './CommentDetail'

export const Post = () => {
    return (
        <div className="ui comments">
            <CommentDetail author="Sam" time="Today at 2pm" comment="Hello there!" imgSrc="https://source.unsplash.com/random" />
            <CommentDetail author="John" time="Today at 5pm" comment="How are you doing" imgSrc="https://source.unsplash.com/random" />
            <CommentDetail author="Jessica" time="Yesterday at 10am" comment="You are the best" imgSrc="https://source.unsplash.com/random" />
        </div>
    )
}
