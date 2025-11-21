import styles from './style.module.css'
import Image from 'next/image'
import logo2026 from '@assets/logo2026.png'
import bannerFull from '@assets/banner-full.png'

export default function HomeBanner() {
    return (
        <div className={`${styles.container}`}>
            <Image alt='SGI 2026' src={logo2026} width={513} height={216} className={`${styles.logo}`} />
            <Image alt='' src={bannerFull} width={811} height={325} className={`${styles.banner1}`} />
            <button className={`${styles.scrollDown}`} />
        </div>
    );
}
