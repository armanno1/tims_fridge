import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, adNumberToUpdate, setTemporaryFile }) => {
    const {url, progress} = useStorage(file, adNumberToUpdate);

    useEffect(() => {
        if (url) {
            setFile(null);
            setTemporaryFile(null);
        }
    }, [url, setFile, setTemporaryFile])


    return (
        <div style={{width: '70%', margin: '0 auto', fontSize: '.8rem', color: '#DDD'}}>
            <div style={{backgroundColor: '#EEE', borderRadius: '5px'}}>
                <div className="progressBar" style={{width: progress + '%', height: '8px', backgroundColor: '#3498db', transition: "ease-in 250ms", borderRadius: '5px', margin: '30px 0px 10px 0px'}}></div>
            </div>
            Updating ad: {adNumberToUpdate}
        </div>
    )
}

export default ProgressBar;