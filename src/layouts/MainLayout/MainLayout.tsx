import { Outlet, useLocation } from 'react-router';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './mainLayout.module.css';

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className={styles.layoutContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Outlet key={location.pathname} />
            </main>
        </div>
    );
};

export default MainLayout;
