import React, { useState } from 'react';
import UploadForm from './UploadForm';
import styles from './Dashboard.module.css';
import UrlInput from './UrlInput';
import fridgeNumbers from '../assets/fridge_numbers.png'

const Dashboard = ({ dashVisible, hideDash, urlArray }) => {

    const [adToUpdate, setAdToUpdate] = useState(1);
    const [showDashContents, setShowDashContents] = useState('updateFrontAds');

    //make an array of length 60 and populate it with 60 links (so I can use indexes to add/update)

    const updateFrontAdsJSX = (
        <div>
            <div style={{color: '#2c3e50', paddingBottom: '20px', fontWeight: 'bold', fontSize: '1.25rem'}}>Front Door Images</div>
            <div style={{color: '#AAA', paddingBottom: '20px', fontSize: "0.8rem"}}>Select a front door ad to update from the drop down.</div>
            <img src={fridgeNumbers} alt="fridge number layout" style={{width: '100px', marginBottom: '20px'}}/>
            <UploadForm adToUpdate={adToUpdate} setAdToUpdate={setAdToUpdate} />
        </div>
    );

    const updateInsideAdsJSX = (
        <div style={{color: '#2c3e50', paddingBottom: '20px', fontWeight: 'bold', fontSize: '1.25rem'}}>Inside Images (under construction)</div>
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
                        Close ❌
                    </div>
                    <div className={styles.leftMenu}>
                        <div className={styles.leftMenuPad}>
                            <ul>
                                <li onClick={() => setShowDashContents("updateFrontAds")}>Door Ads</li>
                                <li onClick={() => setShowDashContents("updateInsideAds")}>Inside Ads</li>
                                <li onClick={() => setShowDashContents("updateLinks")}>Links</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.rightContentPad}>

                            { showDashContents === "updateFrontAds" ? updateFrontAdsJSX : null}
                            { showDashContents === "updateInsideAds" ? updateInsideAdsJSX : null}
                            { showDashContents === "updateLinks" ? updateLinksJSX : null}

                            <div></div>
                            
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