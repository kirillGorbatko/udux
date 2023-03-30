import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hero-section.module.scss';
import { Picture, PictureProps } from '../../ui/picture/picture';
import { Button } from '@/components/ui/button/button';
import { Title } from '@/components/ui/title/title';
import { Description } from '@/components/ui/description/description';

type HeroSectionProps = {
	children?: ReactNode;
	title?: string;
	description?: string;
	ctaButton?: { text: string; href: string };
	bgImages?: PictureProps;
};

export function HeroSection({
	children,
	title,
	description,
	ctaButton,
	bgImages,
}: HeroSectionProps) {
	// gsap.registerPlugin(ScrollToPlugin);

	// const onClick = () => {
	// 	gsap.to(window, { duration: 2, scrollTo: '#SomeId' });
	// };

	return (
		<section className={classNames('section', styles['hero'])}>
			<div className={styles['hero__bg']}>
				<Picture {...bgImages} />
			</div>
			<div className={styles['hero__heading']}>
				{title && (
					<div className={styles['hero__title']}>
						<Title>{title}</Title>
					</div>
				)}
				{description && (
					<div className={styles['hero__descr']}>
						<Description size="xs">{description}</Description>
					</div>
				)}
				{ctaButton && (
					<div className={styles['hero__button']}>
						<Button>{ctaButton?.text}</Button>
					</div>
				)}
			</div>
			<div className={styles['hero__content']}>{children}</div>
		</section>
	);
}
