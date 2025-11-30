import styles from './style.module.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import { snowmanGraffiti } from '@fonts'
import zap from '@assets/zap.svg'

export default function HomeInfo() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <p className={`${styles.date} ${snowmanGraffiti.className}`}>
                {translation('date-start')}
                <span> 24</span>,
                <span> 25 </span>
                {translation('date-middle')}
                <span> 26</span>
                <br />
                {translation('date-end')}
            </p>
            <p className={`${styles.place} ${snowmanGraffiti.className}`}>DANCE 4ALL</p>
            <p className={`${styles.address}`}>
                <a>{translation('address-1')} <br /> {translation('address-2')}</a>
            </p>
            <p>
                <a>Link</a>
            </p>
            <p>
                <a className={`${styles.instagram}`} href='https://www.instagram.com/sgi_oficial/'>
                    <span className={`${styles.instagramIcon}`}></span>
                    <span className={`${styles.instagramLabel}`}>@sgi_oficial</span>
                </a>
            </p>
            <Image alt='' src={zap} width={60} height={88} className={`${styles.zap}`} />
        </div>
    );
}
