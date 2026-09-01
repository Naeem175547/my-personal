import { useNavigate } from "react-router-dom"
export const logout = () => {
    const navigate = useNavigate()
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
    }
    navigate('/')

}