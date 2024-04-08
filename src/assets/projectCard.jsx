function ProjectCard ({ title, description, imgUrl, repoUrl }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <a href={repoUrl}>
        <img className="w-full h-48 object-cover" src={imgUrl} alt={title} />
      </a>
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h5>
        <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>
        <a href={repoUrl} className="inline-flex self-end mt-auto items-center py-2 px-4 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-900 dark:hover:bg-gray-700">
          <img src="tecnology/github.png" alt="GitHub" className="w-5 h-5 me-2" />Repositorio
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
