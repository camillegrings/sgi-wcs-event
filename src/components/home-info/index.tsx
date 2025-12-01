import styles from './style.module.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import { snowmanGraffiti } from '@fonts'
import zap from '@assets/zap.svg'
import tape from '@assets/tape.svg'
import xtape from '@assets/x-tape.svg'

export default function HomeInfo() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.videoWrapper}`}>
                <Image alt='' src={tape} width={100} height={50} className={`${styles.tape}`} />
                <video width="300" height="500" controls autoPlay muted loop>
                    <source src='https://rnuayxakvuwi2axn.public.blob.vercel-storage.com/SGI_video.mp4' type="video/mp4" />
                </video>
                <Image alt='' src={xtape} width={38} height={38} className={`${styles.xtape}`} />
            </div>
            <div className={`${styles.content}`}>
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
                    <a href='https://maps.app.goo.gl/mU6vraDsctQSu9bE6' target='_blank'>{translation('address-1')} <br /> {translation('address-2')}</a>
                </p>
                <p className={`${styles.knowMore}`}>
                    <Link href="/know-more">{translation('know-more')}</Link>
                </p>
                <p>
                    <a className={`${styles.instagram}`} href='https://www.instagram.com/sgi_oficial/' target='_blank'>
                        <span className={`${styles.instagramIcon}`}></span>
                        <span className={`${styles.instagramLabel}`}>@sgi_oficial</span>
                    </a>
                </p>
            </div>
            <Image alt='' src={zap} width={60} height={88} className={`${styles.zap}`} />
        </div>
    );
}
