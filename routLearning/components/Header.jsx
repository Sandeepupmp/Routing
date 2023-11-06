import {Link} from  'react-router-dom'
import Home from '../pages/Home'

export default function Header() {
  return (
    <div className="header">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/app'>App</Link>
    </div>
  )
}