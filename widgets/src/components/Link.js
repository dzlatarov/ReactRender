import React from 'react'

export const Link = ({ className, href, children }) => {
    const onClickHandler = event => {
        event.preventDefault()
        window.history.pushState({}, '', href)
    }
    return <a onClick={onClickHandler} className={className} href={href}>{children}</a>
}
