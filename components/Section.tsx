import { ReactNode } from 'react';

/**
 * Section of a web page
 * @param {ReactNode} children - elements to render inside the section
 * @param {number} columns - number of columns
 * @returns Section Component
 */
export interface ISectionProps {
  children?: ReactNode;
  className?: string;
  columns?: string;
  rows?: string;
  yMargins?: string;
  noMargins?: boolean;
  backgroundColor?: 'bg-white' | 'bg-slate-50' | string;
  id?: string;
}

export default function Section({
  children,
  columns = '',
  rows = '',
  backgroundColor = 'bg-white',
  yMargins = 'py-16 lg:py-32',
  noMargins = false,
  className,
  id,
}: ISectionProps) {
  return (
    <div id={id} className={`${backgroundColor}`}>
      <section
        className={`container grid  ${rows} ${columns} mx-auto max-w-screen-xl  gap-8  px-4 ${
          !noMargins && yMargins
        }  ${className}`}
      >
        {children}
      </section>
    </div>
  );
}
