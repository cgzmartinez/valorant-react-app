import Logo from '../assets/valorant-logo.svg?react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1e1e1e] pb-5 z-50">
      <div className="flex justify-center items-center">
        <NavLink to="/">
          <Logo className="h-20 w-20 fill-[#FD4556] hover:fill-[#ffff]" />
        </NavLink>
      </div>
      <ul className="pt-5 font-bold text-[#494949] justify-center items-center flex">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active pr-20 md:pr-[300px]'
              : 'hover:text-[#886565] duration-150 pr-20 md:pr-[300px]'
          }
          to="/"
        >
          AGENTS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active pl-20 md:pl-[300px]'
              : 'hover:text-[#886565] duration-150 pl-20 md:pl-[300px]'
          }
          to="weapons"
        >
          ARSENAL
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
