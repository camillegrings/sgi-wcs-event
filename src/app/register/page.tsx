import styles from './style.module.css'

import { RegisterForm } from '@components'
import { rascals } from '@fonts'

export default function RegisterPage() {
    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.title} ${rascals.className}`}>Formulário de Inscrição</h1>
            <RegisterForm />
        </div>
    )
}