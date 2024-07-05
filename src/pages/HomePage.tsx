import HomeLoader from '../components/HomeLoader/HomeLoader'
import "../styles/main.scss"
import { Analytics } from "@vercel/analytics/react";

function HomePage() {
    return (
        <div className='main-image'>
            <HomeLoader />
            <Analytics />
        </div>
    )
}

export default HomePage