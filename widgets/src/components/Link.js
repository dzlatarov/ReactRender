import React from 'react'

export const Link = ({ className, href, children }) => {
    const onClickHandler = event => {
        event.preventDefault()
    }
    return <a onClick={onClickHandler} className={className} href={href}>{children}</a>
}
