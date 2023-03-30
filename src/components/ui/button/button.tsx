import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

const buttonStyles = cva(styles['button'], {
	variants: {
		variant: {
			primary: styles['button--primary_variant'],
			secondary: styles['button--secondary_variant'],
		},
		size: {
			base: styles['button--base_size'],
		},
		width: {
			full: styles['button--width_full'],
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'base',
	},
});

type ButtonProps = VariantProps<typeof buttonStyles> & {
	children: ReactNode;
	isLoading?: boolean;
	href?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export function Button({
	children,
	href,
	variant,
	size,
	width,
	isLoading,
	handleClick,
}: ButtonProps) {
	if (href) {
		return (
			<Link className={buttonStyles({ variant, size, width })} href={href}>
				{isLoading ? <>Loading...</> : children}
			</Link>
		);
	} else {
		return (
			<button
				type="button"
				className={buttonStyles({ variant, size, width })}
				onClick={handleClick}
				disabled={isLoading}
			>
				{isLoading ? <>Loading...</> : children}
			</button>
		);
	}
}
