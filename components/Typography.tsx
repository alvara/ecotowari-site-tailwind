import { FC, HTMLAttributes } from 'react';

export interface ITypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'subtitle1'
    | 'subtitle2'
    | 'p'
    | 'body1'
    | 'body2'
    | 'small'
    | 'caption'
    | 'span';
  lineBreak?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Typography: FC<
  ITypographyProps & HTMLAttributes<HTMLOrSVGElement>
> = ({ variant, children, lineBreak = false, className, ...rest }) => {
  // assign the correct tag based on the variant prop
  function assignTag() {
    if (
      variant === 'body1' ||
      variant === 'body2' ||
      variant === 'subtitle1' ||
      variant === 'subtitle2'
    ) {
      return 'p';
    } else {
      return variant;
    }
  }

  const Tag = assignTag();

  // style the typography based on the variant prop
  if (variant === 'h3') {
    className = `${className} font-extrabold`;
  }
  // for underneath large headings (h1, h2, h3)
  if (variant === 'subtitle1') {
    className = `${className}  font-semibold  text-2xl`;
  }
  // for underneath small headings (card headings, etc.)
  if (variant === 'subtitle2') {
    className = `${className} `;
  }
  if (variant === 'caption') {
    className = `${className} text-sm `;
  }
  if (variant === 'small') {
    className = `${className} text-sm`;
  }

  return (
    <Tag className={`${Tag} ${lineBreak && 'mb-4'} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};
