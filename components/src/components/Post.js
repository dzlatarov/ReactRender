import React from 'react'
import { CommentDetail } from './CommentDetail'

export const Post = () => {
    return (
        <div className="ui comments">
            <CommentDetail author="Sam"/>
            <CommentDetail author="John"/>
            <CommentDetail author="Jessica"/>
        </div>
    )
}
