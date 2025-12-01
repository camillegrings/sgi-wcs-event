"use client"
import styles from './style.module.css'
import Image from 'next/image'
import logo2026 from '@assets/logo2026.png'
import bannerFull from '@assets/banner-full.png'
import bannerMobile from '@assets/banner2.png'

export default function HomeBanner() {
    function scrollToSection() {
        const el = document.getElementById('countdown')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={`${styles.container}`}>
            <Image alt='SGI 2026' src={logo2026} width={513} height={216} className={`${styles.logo}`} />
            <Image alt='' src={bannerFull} width={811} height={325} className={`${styles.bannerDesktop}`} />
            <Image alt='' src={bannerMobile} width={431} height={300} className={`${styles.bannerMobile}`} />
            <button className={`${styles.scrollDown}`} onClick={scrollToSection} />
        </div>
    );
}
