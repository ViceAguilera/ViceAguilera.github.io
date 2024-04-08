import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactCard () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_s7roqfy', 'template_t2yqgi9', form.current, {
        publicKey: 'EOeMGJVyneNKN3ju_'
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }
  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col rounded-2xl items-center p-6 space-y-4 bg-white dark:bg-black shadow-lg'>
      <h3 className='dark:text-white text-2xl mb-4 font-extrabold flex items-center'>
        Escribeme :D
      </h3>
        <input
          type='text'
          name='user_name'
          placeholder='Nombre'
          required
          className='dark:text-white p-2 mb-2 w-full border-2 border-gray-300 dark:bg-black rounded focus:outline-none'
        />
        <input
          type='email'
          name='user_email'
          placeholder='Correo'
          required
          className='dark:text-white p-2 mb-2 w-full border-2 border-gray-300 dark:bg-black rounded focus:outline-none'
        />
        <textarea
          name='message'
          placeholder='Mensaje'
          required
          rows='4'
          className='dark:text-white p-2 mb-2 w-full border-2 border-gray-300 dark:bg-black rounded focus:outline-none'
        />
        <button
          type='submit'
          value='Send'
          className='w-full bg-indigo-950 text-white dark:bg-gray-800 font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2  focus:ring-opacity-50'
        >
          Enviar
        </button>
    </form>
  )
}

export default ContactCard
