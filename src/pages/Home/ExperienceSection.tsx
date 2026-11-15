import React from 'react';
import { ExperienceItem, SectionTitle } from '../../components/common';
import { IExperienceSectionProps } from '../../interfaces';

export const ExperienceSection: React.FC<IExperienceSectionProps> = ({
  title,
  items,
  labels,
}) => {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <SectionTitle id="experience-heading" title={title} />

      <div className="mt-4 space-y-3.5">
        {items.map((item) => (
          <ExperienceItem key={item.id} item={item} labels={labels} />
        ))}
      </div>
    </section>
  );
};
