import styles from './style.module.css'
import { useTranslations } from 'next-intl';
import { snowmanGraffiti, rascals } from '@fonts'

export default function Tickets() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <h3 className={`${styles.title} ${snowmanGraffiti.className}`}>{translation('tickets')}</h3>
            <h4 className={`${styles.typeTitle} ${rascals.className}`}>
                Evento completo - Lotes
            </h4>
            <p className={`${styles.typeSubtitle}`}>Acesso completo a aulas e bailes</p>
            <div className={`${styles.typesContainer}`}>
                <div className={`${styles.typesWrapper}`}>
                    <div className={`${styles.infoWrapper}`}>
                        <span className={`${styles.date}`}>01/12</span>
                        <div className={`${styles.wrapper}`}>
                            <span className={`${styles.name}`}>Promocional</span>
                            <span className={`${styles.desc}`}>Inclui: Fullpass, camiseta, pulseira e copo.</span>
                        </div>
                    </div>
                    <div className={`${styles.priceWrapper}`}>
                        <span className={`${styles.price} ${rascals.className}`}>R$300</span>
                        <span className={`${styles.priceDesc}`}>Apenas 5 ingressos disponíveis</span>
                    </div>
                </div>
                <div className={`${styles.typesWrapper}`}>
                    <div className={`${styles.infoWrapper}`}>
                        <span className={`${styles.date}`}>01/12</span>
                        <div className={`${styles.wrapper}`}>
                            <span className={`${styles.name}`}>Lote às Escuras</span>
                            <span className={`${styles.desc}`}>Inclui: Fullpass, pulseira e copo.</span>
                        </div>
                    </div>
                    <div className={`${styles.priceWrapper}`}>
                        <span className={`${styles.price} ${rascals.className}`}>R$300</span>
                    </div>
                </div>
                <div className={`${styles.typesWrapper}`}>
                    <div className={`${styles.infoWrapper}`}>
                        <span className={`${styles.date}`}>15/01</span>
                        <div className={`${styles.wrapper}`}>
                            <span className={`${styles.name}`}>Primeiro Lote</span>
                            <span className={`${styles.desc}`}>Inclui: Fullpass, pulseira e copo.</span>
                        </div>
                    </div>
                    <div className={`${styles.priceWrapper}`}>
                        <span className={`${styles.price} ${rascals.className}`}>R$350</span>
                    </div>
                </div>
                <div className={`${styles.typesWrapper}`}>
                    <div className={`${styles.infoWrapper}`}>
                        <span className={`${styles.date}`}>01/04</span>
                        <div className={`${styles.wrapper}`}>
                            <span className={`${styles.name}`}>Segundo Lote</span>
                            <span className={`${styles.desc}`}>Inclui: Fullpass, pulseira e copo.</span>
                        </div>
                    </div>
                    <div className={`${styles.priceWrapper}`}>
                        <span className={`${styles.price} ${rascals.className}`}>R$400</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
