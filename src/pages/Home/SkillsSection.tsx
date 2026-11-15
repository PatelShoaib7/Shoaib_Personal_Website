import React from 'react';
import { Badge, SectionTitle } from '../../components/common';
import { ISkillsSectionProps } from '../../interfaces';

export const SkillsSection: React.FC<ISkillsSectionProps> = ({
  title,
  skills,
}) => {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <SectionTitle id="skills-heading" title={title} />

      <div className="mt-4 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <Badge key={skill.id} label={skill.label} variant="solid" />
        ))}
      </div>
    </section>
  );
};
