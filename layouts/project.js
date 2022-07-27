import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const ProjectLayout = ({ projects = [] }) => {
  return (
    <Container
      title="Github Repos"
      description="Github Repos I love"
    >
      <p className="text-lg font-light leading-7 text-gray-500 dark:text-gray-400 mb-4 grid place-items-center">
        A list of Github repositories that I love ❤️
      </p>
      <div className="relative flex flex-wrap">
        {projects
          .sort((a, b) => parseInt(a.order) - parseInt(b.order))
          .map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>
    </Container>
  )
}

ProjectLayout.propTypes = {}

export default ProjectLayout
