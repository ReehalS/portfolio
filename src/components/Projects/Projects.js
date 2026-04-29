import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects.json';

const allTypes = ['All', 'Full Stack', 'AI', 'Machine Learning', 'Mobile'];
const allLocations = ['All', 'Personal', 'Club', 'Work', 'Hackathon'];
const allTechs = [
  'All',
  'Next.js',
  'Python',
  'React',
  'React-Native',
  'Java',
  'TypeScript',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
  'Azure',
];

function FilterGroup({ label, options, selected, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-white/50 font-medium mr-1">{label}:</span>
      {options.map((option) => (
        <button
          key={option}
          onClick={() =>
            onSelect(selected === option && option !== 'All' ? 'All' : option)
          }
          className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 cursor-pointer ${
            selected === option
              ? 'bg-accent text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function Projects() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (project.hide) {
      return false;
    }

    const matchType =
      selectedType === 'All' ||
      (project.type && project.type.includes(selectedType));
    const matchLocation =
      selectedLocation === 'All' ||
      (project.location && project.location.includes(selectedLocation));
    const matchTech =
      selectedTech === 'All' ||
      (project.techStack && project.techStack.includes(selectedTech));
    return matchType && matchLocation && matchTech;
  });

  return (
    <div className="py-24 bg-dark-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full mb-4" />
          <p className="text-white/60 mb-8 max-w-2xl">
            A selection of my recent work. Use the filters to browse by type,
            origin, or tech stack.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col gap-3 mb-10 p-5 rounded-xl bg-dark border border-white/5"
        >
          <FilterGroup
            label="Type"
            options={allTypes}
            selected={selectedType}
            onSelect={setSelectedType}
          />
          <FilterGroup
            label="Origin"
            options={allLocations}
            selected={selectedLocation}
            onSelect={setSelectedLocation}
          />
          <FilterGroup
            label="Tech"
            options={allTechs}
            selected={selectedTech}
            onSelect={setSelectedTech}
          />
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  extra={project.extra}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  demoPlaceholder={project.demoPlaceholder}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-white/40">
            No projects match the selected filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
