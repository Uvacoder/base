import React from 'react'
import { FcOpenedFolder, FcGlobe, FcEngineering } from 'react-icons/fc'

const ProjectCard = ({ name, description, source, website }) => {
  return (
    <div className="p-4 sm:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="h-full transform overflow-hidden border border-solid border-gray-200 transition duration-500 hover:scale-105 hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-500">
        <div className="p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="my-2">
              <FcOpenedFolder className="h-6 w-6" />
            </div>
            <div className="flex flex-row justify-between">
              <div className="mx-1.5">
                {website
                  ? (
                  <a
                    className=""
                    target="_blank"
                    rel="noopener noreferrer"
                    href={website}
                  >
                    <FcGlobe className="hover:animate-spin h-6 w-6" />
                  </a>
                    )
                  : null}
              </div>
              <div className="mx-1.5">
                {source
                  ? (
                  <a
                    className=""
                    target="_blank"
                    rel="noopener noreferrer"
                    href={source}
                  >
                    <FcEngineering className="text-black dark:text-white hover:animate-spin h-6 w-6" />
                  </a>
                    )
                  : null}
              </div>
            </div>
          </div>
          {/* <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight"> */}
          <h2 className="mb-2 font-medium flex items-center justify-between gap-3 text-lg md:text-xl text-black dark:text-gray-100">
            {name}
          </h2>

          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
