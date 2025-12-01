import { NextIntlClientProvider } from 'next-intl';
import { Header, Footer } from '@components'
import { leagueSpartan } from '@fonts'

import '../../styles/globals.css'

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
    return (
        <html>
            <body className={leagueSpartan.className}>
                <NextIntlClientProvider>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}