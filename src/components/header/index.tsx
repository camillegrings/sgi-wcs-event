'use client'

import { useState } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import logo from '@assets/logo.png'

export default function Header() {
    const translation = useTranslations('Header');
    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className={`${styles.container}`}>
            <button className={`${styles.mobileMenu}`} onClick={toggleNav}>
                <div className={`${styles.hamburger} ${isOpen && styles.active}`}>
                    <div className={`${styles.bar} ${styles.top}`}></div>
                    <div className={`${styles.bar} ${styles.middle}`}></div>
                    <div className={`${styles.bar} ${styles.bottom}`}></div>
                </div>
            </button>
            <Link href="/">
                <Image alt='SGI' src={logo} width={50} height={33} />
            </Link>
            <nav className={`${styles.nav} ${isOpen && styles.open}`}>
                <Link href="/info">{translation('informations')}</Link>
                <Link href="/schedule">{translation('previous-events')}</Link>
                <Link href="/register">{translation('register')}</Link>
                <Link href="/#about">{translation('about')}</Link>
                <a className={`${styles.instagram}`} href='https://www.instagram.com/sgi_oficial/'>
                    <span className={`${styles.instagramIcon}`}></span>
                    <span className={`${styles.instagramLabel}`}>Instagram</span>
                </a>
            </nav>
        </header>
    );
}
