import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";



function Navbar() {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <nav className="flex bg-gray-600 items-center fixed w-full z-50 ">
        
        <h1 className="p-5 text-amber-500">HiStore</h1>

          <ul className='flex text-white p-5 gap-4'>

            <NavItem title='Home' to='/' />
            <NavItem title='Products' to='/products' />
            <NavItem title='About us'  to='/about'/>
            <NavItem title='Contact'  to='/contact '/>
              
            {auth ? 
            //If auth is true then show the page otherwise null
            <NavItem title='User Page'  to='/protect'/> : null}
          </ul>
      
    </nav>
  )
}
function NavItem({title, to}) {
    return(
        <li className="hover:underline">
          {/* Link is used instead of <a> and to is to connect
          with the page link*/}
          <Link to={to}>
              {title}
          </Link>
           </li>

    )


}
export { Navbar} ;