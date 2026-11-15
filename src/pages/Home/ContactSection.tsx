import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { Badge, SectionTitle } from '../../components/common';
import { IContactSectionProps } from '../../interfaces';

export const ContactSection: React.FC<IContactSectionProps> = ({
  badgeLabel,
  title,
  email,
  copy,
  onCopyEmail,
  gmailComposeHref,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    const ok = await onCopyEmail();
    if (ok) {
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="rounded-2xl border border-zinc-200 bg-zinc-50/70 px-6 py-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <Badge label={badgeLabel} variant="solid" />
      <SectionTitle
        id="contact-heading"
        title={title}
        className="mt-2.5 text-2xl sm:text-3xl"
      />

      <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.promptText}
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        <a
          href={gmailComposeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow active:scale-95 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>{email}</span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
        </a>

        <button
          type="button"
          onClick={() => void handleCopy()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span>{copied ? copy.copiedEmailLabel : copy.copyEmailLabel}</span>
        </button>
      </div>
    </section>
  );
};
