import * as React from 'react';

export interface IDrawerTriggerProps {
  id: string; // same as the id of the drawer
  children: React.ReactNode;
  className: string;
}

export default function DrawerTrigger({
  id,
  children,
  className,
}: IDrawerTriggerProps) {
  return (
    <label htmlFor={id} className={`${className}`}>
      {children}
    </label>
  );
}
