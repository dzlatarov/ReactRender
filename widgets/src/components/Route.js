import { useEffect } from 'react'

export const Route = ({ path, children }) => {
    useEffect(() => {
        const onLocationChange = () => {

        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return window.location.pathname === path ? children : null
}