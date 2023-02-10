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
  backgroundColor?: string;
}

export default function Section({
  children,
  columns = 'lg:grid-cols-1',
  rows = 'lg:grid-rows-1',
  backgroundColor = 'bg-base-100',
  yMargins = 'py-24 lg:py-52',
  noMargins = false,
  className,
}: ISectionProps) {
  return (
    <div className={`${backgroundColor}`}>
      <section
        className={`container grid grid-cols-1  ${rows} ${columns}  mx-auto max-w-screen-xl  gap-8  px-4 ${
          !noMargins && yMargins
        }  ${className} `}
      >
        {children}
      </section>
    </div>
  );
}
