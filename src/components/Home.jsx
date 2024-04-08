import { Button } from 'flowbite-react'

export default function Home () {
  const resumePath = '/Vicente_Aguilera_Arias_CV.pdf'
  return (
    <section id='home' className='flex flex-col md:flex-row items-center justify-center h-screen dark:bg-gray-900'>
      <div className='flex flex-col items-start mx-10'>
        <h1 className='mb-4 text-2xl font-mono leading-none tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white'>
          Hola, Soy Vicente Aguilera 👋
        </h1>
        <p className='font-mono text-base sm:text-lg md:text-xl dark:text-white'>
          Desarrollador de software
        </p>
        <p className='font-mono text-base sm:text-lg md:text-xl dark:text-white'>
            Universidad del Bío-Bío
        </p>
        <div className='mt-4'>
          <Button
            onClick={() => window.open(resumePath)}
            className='text-white dark:text-black bg-gray-800  dark:bg-white hover:bg-black font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            Descargar CV
          </Button>
        </div>
      </div>
      <img src="/Vicente.jpg" alt="Perfil" className='rounded-xl ml-8 mt-8 md:mt-0 mx-10' style={{ width: '350px', height: '300px' }} />
    </section>
  )
}
