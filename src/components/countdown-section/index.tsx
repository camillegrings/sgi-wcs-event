import styles from './style.module.css'
import { Countdown } from '@components'
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import Image from 'next/image'
import { rascals } from '@fonts'
import crown from '@assets/crown.svg'
import music from '@assets/music.svg'

export default function CountdownSection() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`} id='countdown'>
            <Image alt='' src={crown} width={69} height={69} className={`${styles.crown}`} />
            <Image alt='' src={music} width={72} height={72} className={`${styles.music}`} />
            <p className={`${styles.title} ${rascals.className}`}>{translation('still-time')}</p>
            <div className={`${styles.countdown}`}>
                <Countdown />
            </div>
            <Link className={`${styles.link}`} href="/register">{translation('register')}</Link>
        </div>
    );
};