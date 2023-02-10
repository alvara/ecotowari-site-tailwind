import { capitalize } from '@/helpers/stringHelpers';

export interface IBadgeProps {
  label: string;
  className?: string;
}

export default function Badge(props: IBadgeProps) {
  return (
    <div
      className={`badge-primary badge mb-2 rounded-md px-4 py-4 font-semibold text-white ${props.className}`}
    >
      {capitalize(props.label)}
    </div>
  );
}
