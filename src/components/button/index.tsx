import styles from './style.module.css'

export default function Button({ label, type, onClick }: { label: string, type: "primary" | "secondary", onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button type='button' className={`${type === 'primary' && styles.primary} ${type === 'secondary' && styles.secondary}`} onClick={onClick}>{label}</button>
    );
}
