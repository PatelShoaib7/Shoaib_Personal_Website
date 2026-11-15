import React, { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { SocialPlatformEnum } from '../../enums';
import { IIntroSectionProps } from '../../interfaces';
import { cn } from '../../utils';

const getPlatformIcon = (
  platform: SocialPlatformEnum,
  isPrimary: boolean
): React.ReactNode => {
  switch (platform) {
    case SocialPlatformEnum.GITHUB:
      return <Github className="h-3.5 w-3.5" />;
    case SocialPlatformEnum.LINKEDIN:
      return (
        <Linkedin
          className={cn(
            'h-3.5 w-3.5',
            !isPrimary && 'text-[#0A66C2] dark:text-sky-400'
          )}
        />
      );
    case SocialPlatformEnum.EMAIL:
      return <Mail className="h-3.5 w-3.5" />;
  }
};

export const IntroSection: React.FC<IIntroSectionProps> = ({
  profile,
  socialActions,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <section aria-label={profile.name}>
      <div className="flex items-center justify-between gap-6">
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 sm:text-[15px]">
            {profile.title}
          </p>
          <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{profile.location}</span>
          </p>
        </div>

        {/* Circular Profile Photo */}
        <div className="shrink-0">
          {profile.avatarUrl && !imageError ? (
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              onError={() => setImageError(true)}
              className="h-24 w-24 rounded-full border-2 border-zinc-200 object-cover object-[50%_15%] shadow-sm transition-transform duration-300 hover:scale-[1.04] dark:border-zinc-800 sm:h-28 sm:w-28"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-24 w-24 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 font-sans text-xl font-bold tracking-tight text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 sm:h-28 sm:w-28 sm:text-2xl"
            >
              {profile.initials}
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.summary}
      </p>

      {/* High-Visibility Quick Action Buttons (GitHub, LinkedIn, Email via Gmail) */}
      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        {socialActions.map((action) => {
          const isPrimary = action.platform === SocialPlatformEnum.EMAIL;
          return (
            <a
              key={action.id}
              href={action.href}
              target={action.isExternal ? '_blank' : undefined}
              rel={action.isExternal ? 'noopener noreferrer' : undefined}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow active:scale-95',
                isPrimary
                  ? 'border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200'
                  : 'border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white'
              )}
            >
              {getPlatformIcon(action.platform, isPrimary)}
              <span>{action.label}</span>
              {action.isExternal && (
                <ArrowUpRight className="h-3 w-3 opacity-70" />
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};
