import { ReactNode } from 'react';
import styles from './title.module.scss';

type TitleProps = {
	children: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
};

export function Title({ children, tag = 'div' }: TitleProps) {
	const Tag = tag;
	return <Tag className={styles['title']}>{children}</Tag>;
}
