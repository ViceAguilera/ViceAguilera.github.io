import { AcademicCapIcon, BriefcaseIcon, CodeIcon } from '@heroicons/react/solid'

export default function About () {
  return (
    <div id='about' className='border-4 min-h-screen pt-16 bg-indigo-950 dark:bg-gray-900 border-white text-white flex flex-col font-mono md:flex-row items-center justify-center'>
      <div className='max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-12 w-full'>
        <h1 className='text-center mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
          Sobre Mí<span className='text-blue-600'>.</span>
        </h1>
        <p className='text-center text-lg sm:text-xl mb-8'>
        Recién graduado en informática con pasión por la tecnología y programación.
        Ávido por aprender y superar desafíos, busco continuamente mejorar y ampliar mis habilidades.
        Proactivo, responsable y con habilidad para el trabajo en equipo.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <div className='bg-indigo-800 dark:bg-gray-700 p-6 rounded-lg shadow-md mb-4 md:mb-0'>
            <h3 className='text-2xl mb-4 font-extrabold flex items-center'>
              <BriefcaseIcon className='w-6 h-6 mr-2' /> Experiencia Laboral
            </h3>
            <p className='font-bold'>Gatblac</p>
            <p>Software Developer</p>
            <p>Abril 2024 - Actualidad</p>
            <p className='font-bold'>NTT DATA Latam & Europe</p>
            <p>Práctica Profesional Digital Experience</p>
            <p>Enero 2023 - Marzo 2023</p>
            <h3 className='text-2xl mt-6 mb-4 font-extrabold flex items-center'>
              <AcademicCapIcon className='w-6 h-6 mr-2' /> Educación
            </h3>
            <p className='font-bold'>Universidad del Bío Bío</p>
            <p>Ingeniería de ejecución en Computación e Informática</p>
            <p>2020 - 2024</p>
            <p className='font-bold'>Liceo Mauricio Hochschild</p>
            <p>Técnico medio en electrónica</p>
            <p>2018 - 2019</p>
          </div>
          <div className='bg-indigo-800 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl mb-4 font-extrabold flex items-center'>
              <CodeIcon className='w-6 h-6 mr-2' /> Tecnologías
            </h3>
            <div className='grid grid-cols-3 gap-4 justify-items-center'>
              <div className='flex flex-col items-center'>
              <img src='tecnology/javascript.jpg' alt='JavaScript' className='w-12 h-12' />
                <p className='mt-2'>JavaScript</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/react.jpg' alt='React' className='w-15 h-10' />
                <p className='mt-2'>React</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/node.png' alt='Node.js' className='w-9 h-10' />
                <p className='mt-2'>Node.js</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/tailwind.png' alt='Tailwind CSS' className='w-15 h-10' />
                <p className='mt-2'>Tailwind CSS</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/git.jpg' alt='Git' className='w-10 h-10' />
                <p className='mt-2'>Git</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/postman.jpg' alt='Postman' className='w-10 h-10' />
                <p className='mt-2'>Postman</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/python.png' alt='Python' className='w-10 h-10' />
                <p className='mt-2'>Python</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/opencv.png' alt='OpenCV' className='w-10 h-10' />
                <p className='mt-2'>OpenCV</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src='tecnology/yolo.png' alt='Yolov8' className='w-10 h-10' />
                <p className='mt-2' >Yolov8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
