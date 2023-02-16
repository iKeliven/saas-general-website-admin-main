import classNames from 'classnames';
import { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  size: 'small' | 'medium' | 'large';
}

export function Heading({
  children,
  size = 'small',
  className,
  ...rest
}: Props) {
  return (
    <label
      className={classNames(
        'font-bold',
        size === 'small' && 'text-[16px]',
        size === 'medium' && 'text-[21px]',
        size === 'large' && 'text-[24px]',
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
}
