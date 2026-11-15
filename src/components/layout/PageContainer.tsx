import React from 'react';
import { IPageContainerProps } from '../../interfaces';

export const PageContainer: React.FC<IPageContainerProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900 transition-colors duration-150 dark:bg-[#09090B] dark:text-zinc-100">
      {header}
      <main className="mx-auto max-w-2xl px-5 py-12 md:py-16">
        <div className="space-y-12">{children}</div>
        {footer}
      </main>
    </div>
  );
};
