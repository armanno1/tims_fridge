import React from 'react';
import styles from './Ad.module.css';

const Ad = ({ number, imageUrl, urls=[...Array(4)] }) => {
    let backgroundImageObject = null;
    if (imageUrl) {
        backgroundImageObject = {backgroundImage: `url(${imageUrl})`}
    }

    return (
        <div className={`ad ad${number}`} style={backgroundImageObject}>
            <div className={styles.adGrid}>

                {urls[0]
                    ? <a href={urls[0]}><div className={styles.adLink}></div></a>
                    : <div className={styles.adLink}></div>
                }

                {urls[1]
                    ? <a href={urls[1]}><div className={styles.adLink}></div></a>
                    : <div className={styles.adLink}></div>
                }

                {urls[2]
                    ? <a href={urls[2]}><div className={styles.adLink}></div></a>
                    : <div className={styles.adLink}></div>
                }

                {urls[3]
                    ? <a href={urls[3]}><div className={styles.adLink}></div></a>
                    : <div className={styles.adLink}></div>
                }

            </div>
        </div>
        )
}

export default Ad;