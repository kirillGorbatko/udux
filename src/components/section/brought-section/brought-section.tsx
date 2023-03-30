import { ReactNode } from 'react';
import { Description } from '@/components/ui/description/description';
import bgImage from '@/../public/images/brought/bg.png';
import bgMobileImage from '@/../public/images/brought/bg_mob.png';
import woomanImage from '@/../public/images/brought/woman.jpg';
import styles from './brought-section.module.scss';
import { Picture, PictureProps } from '@/components/ui/picture/picture';
import { Logo } from '@/components/ui/logo/logo';
import { MtaLogo } from '@/components/ui/mta-logo/mta-logo';

type BroughtSectionProps = {
	title: string;
	children: ReactNode;
	bgPicture?: PictureProps;
	contentPicture?: PictureProps;
};

export function BroughtSection({
	title,
	children,
	bgPicture,
	contentPicture,
}: BroughtSectionProps) {
	return (
		<section className={styles['brought']}>
			<div className={styles['brought__bg']}>
				<Picture
					img={bgPicture?.img ?? bgImage.src}
					imgMob={bgPicture?.imgMob ?? bgMobileImage.src}
					{...bgPicture}
				/>
			</div>
			<div className={styles['brought__row']}>
				<div className={styles['brought__column']}>
					<div className={styles['brought__img']}>
						<Picture
							img={contentPicture?.img ?? woomanImage.src}
							{...contentPicture}
						/>
					</div>
				</div>

				<div className={styles['brought__column']}>
					<div className={styles['brought__content']}>
						<h3 className={styles['brought__title']}>{title}</h3>

						<div className={styles['brought_logos']}>
							<ul className={styles['brought_logos__row']}>
								<li className={styles['brought_logos__item']}>
									<Logo />
								</li>
								<li className={styles['brought_logos__item']}>
									<MtaLogo />
								</li>
							</ul>
						</div>

						<div className={styles['brought__description']}>
							<Description>{children}</Description>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
