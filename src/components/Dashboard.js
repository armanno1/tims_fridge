import React, { useState } from 'react';
import UploadForm from './UploadForm';
import styles from './Dashboard.module.css';
import UrlInput from './UrlInput';

const Dashboard = ({ dashVisible, hideDash, urlArray }) => {

    const [adToUpdate, setAdToUpdate] = useState(1);
    const [showDashContents, setShowDashContents] = useState('updateFrontAds');

    const updateFrontAdsJSX = (
        <div>
            <div style={{color: '#2c3e50', paddingBottom: '20px', fontWeight: 'bold', fontSize: '1.25rem'}}>Change an Ad image</div>
            <div style={{color: '#AAA', paddingBottom: '20px', fontSize: "0.8rem"}}>Update both <b>door</b> ads and <b>inside</b> ads. The fridge ads are organised as below:</div>
            <UploadForm adToUpdate={adToUpdate} setAdToUpdate={setAdToUpdate} />
        </div>
    );

    const updateLinksJSX = (
        <div>
            <div style={{color: '#2c3e50', paddingBottom: '20px', fontWeight: 'bold', fontSize: '1.25rem'}}>Front Ad Links</div>
            <div style={{color: '#AAA', paddingBottom: '20px', fontSize: "0.8rem"}}>Links are divided into groups of four, and correspond to the relevant ad space. The links form a matrix from left to right.<br /><br /><b>To-do:</b> probably add an image to the right of each group of 4 showing which ad it is. Also, give feedback to the user when the link update is complete.</div>
            {urlArray.map((el, i) => {
                let urlNo = i+1; 
                return <UrlInput key={urlNo} urlNo={urlNo} urlString={el} className={ urlNo%4 === 0 ? styles.fourthAd : styles.adInput}/>
            })}
        </div>
    )

    if (dashVisible) {
        return (
            <div className={styles.backdrop}>
                <div className={styles.dashboard}>
                    <div className={styles.closeButton} onClick={hideDash}>
                        ╳
                    </div>
                    <div className={styles.leftMenu}>
                        <div className={styles.leftMenuPad}>
                            <ul>
                                <li onClick={() => setShowDashContents("updateFrontAds")}>Update Ads</li>
                                <li onClick={() => setShowDashContents("updateLinks")}>Update Links</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.rightContentPad}>

                            { showDashContents === "updateFrontAds" ? updateFrontAdsJSX : null}
                            { showDashContents === "updateLinks" ? updateLinksJSX : null}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
};

export default Dashboard;