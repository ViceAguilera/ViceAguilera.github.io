import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid'
import ContactCard from '../assets/ContactCard'

export default function Contact () {
  return (
    <div
      id='contact'
      className='min-h-screen pt-16 bg-indigo-950 dark:bg-gray-900 flex flex-col font-mono items-center justify-center'>
      <div className='max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-12 w-full'>
        <h1 className='text-center mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white'>
          Contactos<span className='text-blue-600'>.</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Información de contacto */}
          <div className='space-y-6'>
            <div className='flex items-center text-white'>
              <MailIcon className='w-10 h-10 mr-4' />
              <div>
                <h3 className='text-2xl font-extrabold'>Correo</h3>
                <p>vicente.aguilera1908@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center text-white'>
              <LocationMarkerIcon className='w-10 h-10 mr-4' />
              <div>
                <h3 className='text-2xl font-extrabold'>Ubicación</h3>
                <p>Chile</p>
              </div>
            </div>
            <div className='flex items-center text-white'>
              <PhoneIcon className='w-10 h-10 mr-4' />
              <div>
                <h3 className='text-2xl font-extrabold'>Teléfono</h3>
                <p>+56 9 7667 4794</p>
              </div>
            </div>
            <div className='flex items-center text-white'>
              <a href='https://github.com/ViceAguilera' target='_blank' rel="noreferrer">
                <img
                  src='tecnology/github.png'
                  alt='GitHub'
                  className='w-10 h-10 mr-4'
                />
              </a>
              <a href='https://www.linkedin.com/in/vicenteaguilera/' target='_blank' rel="noreferrer">
                <img
                  src='tecnology/linkedin.png'
                  alt='LinkedIn'
                  className='w-10 h-10 mr-4'
                />
              </a>
            </div>
          </div>
          <div className='w-full'>
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  )
}
