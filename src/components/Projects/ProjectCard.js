import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ title, description, extra, imgPath, ghLink, demoLink, demoPlaceholder }) {
  return (
    <div className="group h-full flex flex-col bg-dark rounded-xl border border-white/5 overflow-hidden hover:border-accent/20 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      {imgPath && (
        <div className="relative overflow-hidden aspect-video bg-dark-lighter">
          <img
            src={imgPath}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {extra && (
          <span className="inline-block self-start px-2.5 py-1 text-xs font-semibold text-gold bg-gold/10 rounded-md mb-3">
            {extra}
          </span>
        )}

        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        <p className="text-sm text-white/60 leading-relaxed flex-1">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <BsGithub />
              Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-accent hover:text-white bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
            >
              <FiExternalLink />
              Demo
            </a>
          )}
          {demoPlaceholder && !demoLink && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/30 bg-white/5 rounded-lg">
              <FiExternalLink />
              {demoPlaceholder}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
