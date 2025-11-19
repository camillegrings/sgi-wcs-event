import styles from './style.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

export default function Header() {
    const translation = useTranslations('Header');

    return (
        <div className={`${styles.container}`}>
            <nav>
                <Link href="/register">{translation('register')}</Link>
                <Link href="/info">{translation('informations')}</Link>
                <Link href="/schedule">{translation('schedule')}</Link>
                <Link href="#about">{translation('about')}</Link>
            </nav>
        </div>
    );
}
