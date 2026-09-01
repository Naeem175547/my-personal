
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar">
            <Link className="logo" to="/">
                <h2>🎬 Movie Explorer</h2>
            </Link>
            <Link to="/">Home</Link>
        </nav>
    
  )
}
