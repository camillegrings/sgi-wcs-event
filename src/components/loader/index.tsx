import styles from './style.module.css'

export default function Loader() {
    return <div className={`${styles.loaderOverlay}`}>
        <span className={`${styles.loader}`}></span>
    </div>
}
