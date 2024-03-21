import { SiValorant } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1e1e1e] z-50">
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/cgzmartinez/valorant-react-app"
          target="_blank"
        >
          <SiGithub className="absolute top-9 left-10 h-7 w-auto fill-white/30 hover:fill-[#FD4556] duration-200" />
        </a>
        <NavLink to="/">
          <SiValorant className="h-[70px] w-[70px] md:h-[60px] md:w-[60px] pt-5 fill-[#FD4556] hover:scale-125 duration-200" />
        </NavLink>
        <a
          className="absolute top-9 right-10 text-white/50 hover:text-white duration-200"
          href="https://valorant-api.com/"
          target="_blank"
        >
          API
        </a>
      </div>
      <ul className="pt-2 font-bold text-[#494949] text-[15px] justify-center items-center flex">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active pr-20 md:pr-[300px]'
              : 'hover:text-[#FD4556] duration-150 pr-20 md:pr-[300px]'
          }
          to="/"
        >
          AGENTS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active pl-20 md:pl-[300px]'
              : 'hover:text-[#FD4556] duration-150 pl-20 md:pl-[300px]'
          }
          to="weapons"
        >
          ARSENAL
        </NavLink>
      </ul>
      <div className="bg-[#FD4556] w-[100vh] mt-[2px] md:w-[100vw] p-[1px]"></div>
    </nav>
  )
}

export default Navbar
