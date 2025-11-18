import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['pt', 'es', 'en']
const defaultLocale = 'en'

async function getLocale() {
    const server = await headers()
    const serverAcceptedLanguage = server.get('accept-language') || defaultLocale
    const languages = new Negotiator({ headers: { 'accept-language': serverAcceptedLanguage } }).languages()

    return match(languages, locales, defaultLocale)
}

export default getRequestConfig(async () => {
    const locale = await getLocale();

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});