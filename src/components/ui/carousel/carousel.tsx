import React from 'react';
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Picture, PictureProps } from '../picture/picture';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from './carousel.module.scss';

type CarouselProps = {
	list: PictureProps[];
};

const Carousel = ({ list }: CarouselProps) => {
	return (
		<div className={styles['carousel']}>
			<Swiper
				modules={[EffectCoverflow]}
				slidesPerView="auto"
				effect="coverflow"
				centeredSlides
				grabCursor
				className={styles['carousel__inner']}
				breakpoints={{
					// when window width is >= 320px
					1: {
						spaceBetween: 20,
						coverflowEffect: {
							depth: 1200,
							rotate: -125,
							modifier: 0.25,
							stretch: 0,
							scale: 0.75,
						},
					},
					1024: {
						spaceBetween: 50,
						coverflowEffect: {
							depth: 1700,
							rotate: -85,
							modifier: 0.12,
							stretch: -100,
							scale: 0.95,
						},
					},
				}}
				// loop
			>
				{list.map((card: PictureProps, index) => {
					return (
						<SwiperSlide className={styles['carousel__card']} key={index}>
							<Picture {...card} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export { Carousel };
export type { CarouselProps };
