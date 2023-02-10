import { ReactNode } from 'react';

export interface IButtonProps {
  children?: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'white';
  className?: string;
}

export default function Button({
  children,
  variant = 'outlined',
  fullWidth,
  color = 'primary',
  className,
}: IButtonProps) {
  // determine classes for button variant
  function selectVariant() {
    switch (variant) {
      case 'contained':
        return 'btn-lg btn-primary';
      case 'outlined':
        return 'btn-lg btn-outline';
      case 'text':
        return 'btn-lg btn-ghost';
      default:
        return 'btn-lg btn-primary';
    }
  }

  // determine classes for button color
  function selectColor() {
    switch (color) {
      case 'primary':
        return 'btn-lg btn-primary';
      case 'secondary':
        return 'btn-lg btn-secondary';
      case 'accent':
        return 'btn-lg btn-accent';
      case 'ghost':
        return 'btn-lg btn-ghost';
      case 'white':
        return 'btn-lg btn-white text-white hover:bg-white hover:text-primary';
      default:
        return 'btn-lg btn-accent';
    }
  }

  return (
    <div
      className={`btn-lg flex w-60 cursor-pointer items-center justify-evenly rounded-full font-semibold duration-300  ${selectVariant()} ${selectColor()} ${
        fullWidth && 'btn-block'
      } ${className}`}
    >
      <span className="mx-4">{children}</span>{' '}
      <span className="text-2xl">›</span>
    </div>
  );
}
