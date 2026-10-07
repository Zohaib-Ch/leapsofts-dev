import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './mainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
