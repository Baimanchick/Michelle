import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function MainLayout() {
    const width = useWindowSize();
    const isMobile = width.width && width.width < 900;
    return (
        isMobile ? (
            <>
                <Suspense>
                    <Outlet />
                </Suspense>
                <ScrollToTop />
            </>

        ) : (
            <ErrorMessage />
        )
    )
}

export default MainLayout