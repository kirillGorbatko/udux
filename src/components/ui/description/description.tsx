import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import styles from './description.module.scss';

const className = cva(styles['description'], {
	variants: {
		size: {
			xs: styles['description--xs_mod'],
			base: styles['description--base_mod'],
			lg: styles['description--lg_mod'],
		},
	},
	defaultVariants: {
		size: 'base',
	},
});

type DescriptionProps = VariantProps<typeof className> & {
	children: ReactNode;
};

export function Description({ children, size }: DescriptionProps) {
	return <div className={className({ size })}>{children}</div>;
}
