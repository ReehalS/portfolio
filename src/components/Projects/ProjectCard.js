import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

function normalizeLinks(linkOrList, defaultLabel) {
  if (!linkOrList) {
    return [];
  }

  const list = Array.isArray(linkOrList) ? linkOrList : [linkOrList];

  return list
    .filter(Boolean)
    .map((item, index) => {
      if (typeof item === 'string') {
        const label =
          list.length > 1 ? `${defaultLabel} ${index + 1}` : defaultLabel;
        return { url: item, label };
      }

      if (item && typeof item === 'object') {
        const label = item.label
          ? item.label
          : list.length > 1
            ? `${defaultLabel} ${index + 1}`
            : defaultLabel;
        return { url: item.url, label };
      }

      return null;
    })
    .filter((item) => item && item.url);
}

function ProjectCard({
  title,
  description,
  extra,
  imgPath,
  ghLink,
  demoLink,
  demoPlaceholder,
}) {
  const ghLinks = normalizeLinks(ghLink, 'GitHub');
  const demoLinks = normalizeLinks(demoLink, 'Demo');

  return (
    <div className="group h-full flex flex-col bg-dark rounded-xl border border-white/5 overflow-hidden hover:border-accent/20 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      {imgPath && (
        <div className="relative overflow-hidden aspect-video bg-dark flex items-center justify-center">
          <img
            src={imgPath}
            alt={title}
            className="max-w-full max-h-full object-contain"
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
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-white/5">
          {ghLinks.map((link) => (
            <a
              key={`gh-${link.url}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <BsGithub />
              {link.label}
            </a>
          ))}
          {demoLinks.map((link) => (
            <a
              key={`demo-${link.url}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-accent hover:text-white bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
            >
              <FiExternalLink />
              {link.label}
            </a>
          ))}
          {demoPlaceholder && demoLinks.length === 0 && (
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
