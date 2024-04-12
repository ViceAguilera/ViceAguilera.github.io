import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactCard () {
  const form = useRef()
  const [userEmail, setUserEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    if (!emailError && userEmail && !isSent) {
      emailjs.sendForm('service_s7roqfy', 'template_t2yqgi9', form.current, 'EOeMGJVyneNKN3ju_')
        .then(
          () => {
            console.log('SUCCESS!')
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
            setIsSent(true)
          },
          (error) => {
            console.log('FAILED...', error.text)
          }
        )
    }
  }

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (email === 'vicente.aguilera1908@gmail.com') {
      return '👏👏👏 que gracioso, prueba con tu correo ahora xd.'
    } else if (!emailPattern.test(email)) {
      return 'Por favor ingrese un correo válido.'
    }
    return ''
  }

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value
    setUserEmail(inputEmail)
    setEmailError(validateEmail(inputEmail))
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
        value={userEmail}
        onChange={handleEmailChange}
        disabled={isSent}
        className={`dark:text-white p-2 mb-2 w-full border-2 ${emailError ? 'border-red-500' : 'border-gray-300'} dark:bg-black rounded focus:outline-none`}
      />
      {emailError && <div className="text-red-500 text-sm">{emailError}</div>}
      <textarea
        name='message'
        placeholder='Mensaje'
        required
        rows='4'
        disabled={isSent}
        className='dark:text-white p-2 mb-2 w-full border-2 border-gray-300 dark:bg-black rounded focus:outline-none'
      />
      <button
        type='submit'
        disabled={isSent}
        className={`w-full bg-indigo-950 text-white dark:bg-gray-800 font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${isSent ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Enviar
      </button>
      {showToast && (
        <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">Mensaje enviado correctamente</div>
        </div>
      )}
    </form>
  )
}

export default ContactCard
