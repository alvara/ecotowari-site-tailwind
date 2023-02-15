import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Typography } from '../Typography';

export interface IFactCardProps {
  colored: boolean;
  icon: IconDefinition;
  fact: string;
  source?: string;
}

export default function FactCard({
  colored = false,
  icon,
  fact,
  source,
}: IFactCardProps) {
  return (
    <div
      className={`lg:order1 col-span-2 flex aspect-square flex-col justify-center gap-8 ${
        colored ? 'bg-accent' : 'bg-white'
      } p-16 text-center align-middle lg:col-span-1`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`mx-auto w-16 text-center ${
          colored ? 'text-white' : 'text-accent'
        }`}
      />
      <Typography
        variant="h3"
        className={` text-2xl ${colored ? 'text-white' : 'text-accent'}`}
      >
        {fact}
      </Typography>
      <Typography
        variant="p"
        className={`${colored ? 'text-white' : 'text-accent'}`}
      >
        {source}
      </Typography>
    </div>
  );
}
