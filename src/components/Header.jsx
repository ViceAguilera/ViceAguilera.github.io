import { Navbar, Button } from 'flowbite-react'
import { FaMoon } from 'react-icons/fa'

export default function Header () {
  return (
    <div className='drop-shadow-xl font-mono bg-slate-300 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-black'>
      <Navbar fluid={true} rounded={false}>
        <Navbar.Brand href='/'>
          <span className='lg:ml-20 self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            SiriusIO Portafolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
          <Button className='w-12 h-10 lg:justify-center sm:inline my-1 mr-4' color='gray' pill>
            <FaMoon />
          </Button>
        <Navbar.Collapse>
          <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='#home'
                className='block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Inicio
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Proyectos
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Contacto
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
