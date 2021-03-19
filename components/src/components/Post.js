import React from 'react'
import { ApprovalCard } from './ApprovalCard'
import { CommentDetail } from './CommentDetail'

export const Post = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    time="Today at 2pm"
                    comment="Hello there!"
                    imgSrc="https://source.unsplash.com/random" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="John"
                    time="Today at 5pm"
                    comment="How are you doing"
                    imgSrc="https://source.unsplash.com/random" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jessica"
                    time="Yesterday at 10am"
                    comment="You are the best"
                    imgSrc="https://source.unsplash.com/random" />
            </ApprovalCard>
        </div>
    )
}
