import classNames from 'classnames';
import { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
}

export function Button({
  children,
  size = 'small',
  className,
  ...rest
}: Props) {
  return (
    <button
      className={classNames(
        'text-white bg-[#164C73] rounded-md',
        size === 'small' && 'w-[105px] h-[40px] text-base',
        size === 'medium' && 'w-[115px] h-[40px]',
        size === 'large' && 'w-[130px] h-[50px]',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
