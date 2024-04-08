import { Button } from 'flowbite-react'

export default function Home () {
  const resumePath = '/Vicente_Aguilera_Arias_CV.pdf'

  return (
    <section id='home' className='flex flex-col md:flex-row items-center justify-center h-screen'>
      <div className='flex flex-col items-start'>
        <h1 className='mb-4 text-2xl font-mono leading-none tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white'>
          Hola, Soy Vicente Aguilera 👋
        </h1>
        <p className='font-mono text-base sm:text-lg md:text-xl'>
          Ingeniero de software
        </p>
        <div className='mt-4'>
          <Button
            onClick={() => window.open(resumePath)}
            className='text-white bg-gradient-to-r from-teal-400 via-indigo-900- to-indigo-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:bg-indigo-950 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            Descargar CV
          </Button>
        </div>
      </div>
      <img src="/Vicente.jpg" alt="Perfil" className='rounded-full ml-8 mt-8 md:mt-0' style={{ width: '250px', height: '250px' }} />
    </section>
  )
}
