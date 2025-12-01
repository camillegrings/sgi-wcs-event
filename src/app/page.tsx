import { HomeBanner, HomeInfo, CountdownSection, Tickets } from '@components'

export default function HomePage() {
    return <div>
        <HomeBanner />
        <CountdownSection />
        <HomeInfo />
        <Tickets />
    </div>;
}