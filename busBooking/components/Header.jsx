import { Link } from "react-router-dom";

 function Header() {
  return (
    <div className='header'>
    <Link to='/' >Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/buses/1234/New/Red'>Bus</Link>
    <Link to='/host'>Host</Link>
    </div>
  )
}
export default Header;