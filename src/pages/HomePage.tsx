import HomeLoader from '../components/HomeLoader/HomeLoader'
import "../styles/main.scss"

function HomePage() {
    return (
        <div className='main-image'>
            <HomeLoader />
        </div>
    )
}

export default HomePage