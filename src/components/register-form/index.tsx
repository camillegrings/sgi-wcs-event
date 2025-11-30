'use client'
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import { Button, Loader } from '@components'
import qrcode from '@assets/qrcodepix.png'
import styles from './style.module.css'

import sendRegisterForm from '../../lib/sendRegisterForm'

interface IFormInput {
    Email: string
    Name: string
    Phone: string,
    Level: string,
    Role: string,
    Compete: string,
    Tickets: string
}

export default function RegisterForm() {
    const translation = useTranslations('Register');
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const PIX_KEY = '00020101021126580014br.gov.bcb.pix013629a01897-c30a-4db3-9027-1a1373e4129e5204000053039865802BR5925Lucas Esteves da Conceica6009SAO PAULO622905251JCNJGQ2V7D1A9Y7EHNETVNF963043224'

    async function onSubmit(data: IFormInput) {
        try {
            setIsLoading(true)
            await sendRegisterForm(data)
            setIsLoading(false)
            setShowSuccessMessage(true)
        } catch (error) {
            setIsLoading(false)
            console.error(error);
            toast.error(translation('form-send-error'), {
                position: "top-right",
                theme: "colored",
            });
        }
    }

    async function copyPixToClipboard() {
        try {
            await navigator.clipboard.writeText(PIX_KEY);
            toast(translation('copy-success'), {
                position: "top-right",
                theme: "dark",
            });
        } catch (err) {
            console.error('Failed to copy text: ', err);
            toast.error(translation('copy-error'), {
                position: "top-right",
                theme: "colored",
            });
        }
    }

    if (showSuccessMessage) {
        return (
            <div className={`${styles.successContainer}`}>
                <p className={`${styles.formSuccess}`}>{translation('form-send-success')}</p>
                <p className={`${styles.successEmailText}`}>{translation('send-payment-receipt')}</p>
                <a className={`${styles.successEmailLink}`} href="mailto:swingdegarotos@gmail.com">swingdegarotos@gmail.com</a>
                <div className={`${styles.successQRCode}`}>
                    <Image alt='QRCode PIX' src={qrcode} width={160} height={150} />
                    <Button label={translation('copy-pix')} onClick={copyPixToClipboard} type="secondary" />
                </div>
            </div>
        )
    }

    return (
        <form className={`${styles.form}`}>
            <fieldset>
                <label>{translation('email')}:</label>
                <input type="text" placeholder={translation('email-placeholder')} {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} aria-invalid={errors.Email ? "true" : "false"} />
                <p role="alert" className={`${styles.errorMessage}`}>
                    {errors.Email?.type === 'required' && translation('required-field')}
                    {errors.Email?.type === 'pattern' && translation('email-valid')}
                </p>
            </fieldset>
            <fieldset>
                <label>{translation('name')}:</label>
                <input type="text" placeholder={translation('name-placeholder')} {...register("Name", { required: true, maxLength: 80 })} aria-invalid={errors.Name ? "true" : "false"} />
                <p role="alert" className={`${styles.errorMessage}`}>
                    {errors.Name?.type === 'required' && translation('required-field')}
                    {errors.Name?.type === 'maxLength' && translation('name-valid')}
                </p>
            </fieldset>
            <fieldset>
                <label>{translation('phone')}:</label>
                <input type="tel" placeholder={translation('phone-placeholder')} {...register("Phone", { required: true, minLength: 6, maxLength: 12 })} aria-invalid={errors.Phone ? "true" : "false"} />
                <p role="alert" className={`${styles.errorMessage}`}>
                    {errors.Phone?.type === 'required' && translation('required-field')}
                    {(errors.Phone?.type === 'maxLength' || errors.Phone?.type === 'minLength') && translation('phone-valid')}
                </p>
            </fieldset>
            <fieldset className={`${styles.radiogroup}`}>
                <legend className={`${styles.radiolegend}`}>{translation('level-label')}</legend>
                <p role="alert" className={`${styles.errorMessage}`}>
                    {errors.Level?.type === 'required' && translation('required-field')}
                </p>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Level", { required: true })} type="radio" value="0" id="level-0" />
                    <label htmlFor="level-0">{translation('level-option1')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Level", { required: true })} type="radio" value="1" id="level-1" />
                    <label htmlFor="level-1">{translation('level-option2')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Level", { required: true })} type="radio" value="2" id="level-2" />
                    <label htmlFor="level-2">{translation('level-option3')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Level", { required: true })} type="radio" value="3" id="level-3" />
                    <label htmlFor="level-3">{translation('level-option4')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Level", { required: true })} type="radio" value="4" id="level-4" />
                    <label htmlFor="level-4">{translation('level-option5')}</label>
                </div>
            </fieldset>
            <fieldset className={`${styles.radiogroup}`}>
                <legend className={`${styles.radiolegend}`}>{translation('role-label')}</legend>
                <p role="alert" className={`${styles.errorMessage}`}>
                    {errors.Role?.type === 'required' && translation('required-field')}
                </p>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Role", { required: true })} type="radio" value="Leader" id="role-leader" />
                    <label htmlFor="role-leader">{translation('role-option1')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Role", { required: true })} type="radio" value="Follower" id="role-follower" />
                    <label htmlFor="role-follower">{translation('role-option2')}</label>
                </div>
            </fieldset>
            <fieldset className={`${styles.radiogroup}`}>
                <legend className={`${styles.radiolegend}`}>{translation('tickets-label')}</legend>
                <p role="alert" className={`${styles.errorMessage}`}>
                    {errors.Tickets?.type === 'required' && translation('required-field')}
                </p>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Tickets", { required: true })} type="radio" value="1" id="tickets-1" />
                    <label htmlFor="tickets-1">{translation('tickets-option1')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Tickets", { required: true })} type="radio" value="2" id="tickets-2" />
                    <label htmlFor="tickets-2">{translation('tickets-option2')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Tickets", { required: true })} type="radio" value="3" id="tickets-3" />
                    <label htmlFor="tickets-3">{translation('tickets-option3')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Tickets", { required: true })} type="radio" value="4" id="tickets-4" />
                    <label htmlFor="tickets-4">{translation('tickets-option4')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Tickets", { required: true })} type="radio" value="5" id="tickets-5" />
                    <label htmlFor="tickets-5">{translation('tickets-option5')}</label>
                </div>
            </fieldset>
            <fieldset className={`${styles.radiogroup}`}>
                <legend className={`${styles.radiolegend}`}>{translation('compete-label')}</legend>
                <p role="alert" className={`${styles.errorMessage}`}>
                    {errors.Compete?.type === 'required' && translation('required-field')}
                </p>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Compete", { required: true })} type="radio" value="1" id="compete-1" />
                    <label htmlFor="compete-1">{translation('compete-option1')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Compete", { required: true })} type="radio" value="2" id="compete-2" />
                    <label htmlFor="compete-2">{translation('compete-option2')}</label>
                </div>
                <div className={`${styles.radioitem}`}>
                    <input {...register("Compete", { required: true })} type="radio" value="3" id="compete-3" />
                    <label htmlFor="compete-3">{translation('compete-option3')}</label>
                </div>
            </fieldset>
            <div>
                <legend className={`${styles.paymentlegend}`}>{translation('payment')}:</legend>
                <div className={`${styles.paymentContent}`}>
                    <Image alt='QRCode PIX' src={qrcode} width={160} height={150} />
                    <div className={`${styles.paymentInfo}`}>
                        <div>
                            <Button label={translation('copy-pix')} onClick={copyPixToClipboard} type="secondary" />
                            <p className={`${styles.pixCode}`}>{PIX_KEY}</p>
                        </div>
                        <div>
                            <p className={`${styles.emailText}`}>{translation('send-payment-receipt')}</p>
                            <a className={`${styles.emailLink}`} href="mailto:swingdegarotos@gmail.com">swingdegarotos@gmail.com</a>
                        </div>
                    </div>
                </div>
                <p>{translation('form-sent-memo')}{" =)"}</p>
            </div>
            <div className={`${styles.submit}`}>
                <Button label={translation('send')} onClick={handleSubmit(onSubmit)} type="primary" />
            </div>
            <ToastContainer />
            {isLoading && <Loader />}
        </form>
    )
}