import ProjectCard from '../assets/ProjectCard'

export default function Projects () {
  const projects = [
    {
      title: 'Sistema ANPR',
      description: 'Proyecto de tesis para la detección de patentes vehiculares en tiempo real con YOLOv8 Y EasyOCR.',
      imgUrl: '/projects/ANPR.png',
      repoUrl: 'https://github.com/ViceAguilera/detector-script-tesis.git'
    },
    {
      title: 'Entrenamiento YOLOv8',
      description: 'Código de entrenamiento de modelos de detección de objetos con YOLOv8 en PyTorch.',
      imgUrl: '/projects/yolo_tesis.png',
      repoUrl: 'https://github.com/ViceAguilera/Train-model-yolov8.git'
    },
    {
      title: 'SiriusBLog',
      description: 'Blog personal desarrollado con MERN stack. ⚒️ACTUALMENTE EN DESARROLLO⚒️',
      imgUrl: '/projects/siriusblog.png',
      repoUrl: 'https://github.com/ViceAguilera/SiriusIO-Blog.git'
    }
  ]

  return (
    <div
    id='projects'
    className='min-h-screen pt-16 text-black bg-white dark:bg-gray-900 flex flex-col items-center justify-center font-mono'>
    <div className='max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-12'>
      <h1 className='text-black dark:text-white text-center mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
        Proyectos<span className='text-blue-600'>.</span>
      </h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
