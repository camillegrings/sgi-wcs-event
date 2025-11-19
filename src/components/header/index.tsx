import styles from './style.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { snowmanGraffiti } from '@fonts'

export default function Header() {
    const translation = useTranslations('Header');

    return (
        <header className={`${styles.container}`}>
            <Link href="/" className={`${styles.title} ${snowmanGraffiti.className}`}>SG INVITATION</Link>
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
