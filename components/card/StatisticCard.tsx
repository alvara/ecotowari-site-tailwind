'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Typography } from '../Typography';

export interface IStatisticCardProps {
  faIcon: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  description: string;
  statistic: number;
  unit?: string; // kg, L, etc.
}

export function StatisticCard({
  faIcon,
  statistic,
  unit,
  description,
}: IStatisticCardProps) {
  return (
    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
      {({ isVisible }) => (
        <div className="card mx-4 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <FontAwesomeIcon
              icon={faIcon}
              size="lg"
              className="text-primary"
              style={{
                width: '5rem',
                height: '5rem',
              }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <Typography variant="h3" className="m-0 text-3xl text-primary">
              {isVisible ? <CountUp end={statistic} /> : null}
              {unit}
            </Typography>
            <p className="font-semibold">{description}</p>
          </div>
        </div>
      )}
    </VisibilitySensor>
  );
}
