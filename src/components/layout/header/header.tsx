import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo/logo';
import { Column, Navigation } from './ui';
import { Button } from '@/components/ui/button/button';
import styles from './header.module.scss';
import { Hyperlink } from '@/types';

type HeaderProps = {
	navItems: Hyperlink[];
	hasMobileCta?: boolean;
};

export function Header({ navItems, hasMobileCta = false }: HeaderProps) {
	return (
		<header className={styles['header']}>
			<div className={styles['header__row']}>
				<Column>
					<Link href="./" className={styles['header__logo']}>
						<Logo />
					</Link>
				</Column>

				<Column mod="header__column--desktop_mod">
					<Navigation items={navItems} />
				</Column>

				<Column mod="header__column--desktop_mod">
					<Button>Login</Button>
				</Column>

				<Column
					mod={
						hasMobileCta
							? 'header__column--mobile_mod'
							: 'header__column--hidden_mod'
					}
				>
					<Link href="./" className={styles['header__cta']}>
						Buy Stream Pass
					</Link>
				</Column>
			</div>
		</header>
	);
}
