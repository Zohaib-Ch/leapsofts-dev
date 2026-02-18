import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './error.module.css';
import Button from '../../components/Button/Button';

const Error: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.errorPage}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.videoBackground}
            >
                <source src="/bg_video/vid-4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={styles.overlay}></div>

            <div className={styles.container}>
                <h1 className={styles.modernTitle}>Page Not Found</h1>
                <div className={styles.errorCode}>404</div>

                <div className={styles.terminal}>
                    <div className={styles.terminalLine}>
                        <span className={styles.prompt}>leapsofts@root:~$</span>
                        <span>locate page_uri --status</span>
                    </div>
                    <div className={styles.terminalLine}>
                        <span style={{ color: 'var(--color-primary-light)' }}>[ERROR]</span>
                        <span> 404: RESOURCE_NOT_FOUND</span>
                    </div>
                    <div className={styles.terminalLine}>
                        <span className={styles.prompt}>leapsofts@root:~$</span>
                        <span>reboot --target home</span>
                        <span className={styles.cursor}></span>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <Button
                        text="Go to Home"
                        color1="var(--color-primary)"
                        color2="var(--color-primary-light)"
                        onClick={() => navigate('/')}
                        hasIcon
                    />
                </div>
            </div>

        </div>

    );
};

export default Error;
