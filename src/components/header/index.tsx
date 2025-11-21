import styles from './style.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import logo from '@assets/logo.png'

export default function Header() {
    const translation = useTranslations('Header');

    return (
        <header className={`${styles.container}`}>
            <Link href="/">
                <Image alt='SGI' src={logo} width={50} height={33} />
            </Link>
            <nav className={`${styles.nav}`}>
                <Link href="/register">{translation('register')}</Link>
                <Link href="/info">{translation('informations')}</Link>
                <Link href="/schedule">{translation('schedule')}</Link>
                <Link href="/#about">{translation('about')}</Link>
                <a className={`${styles.instagram}`} href='https://www.instagram.com/sgi_oficial/' />
            </nav>
        </header>
    );
}
