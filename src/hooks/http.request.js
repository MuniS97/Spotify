import {useCallback, useState} from "react"
const baseUrl = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')


export function HttpRequest() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = useCallback(async function(path, method = "get", body = null) {
        try{
            setLoading(true)
            const res = await fetch(baseUrl + path, {
                method,
                body: body ? JSON.stringify(body) : body,
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })

            if(res?.ok) {
                setLoading(false)
                const data = await res.json()
                return data
            }
            setError(true)
            return res
        } catch (e) {
            setLoading(false)
            setError(true)
            return e.message
        }
    }, [])

    return {
        loading,
        error,
        request
    }
}