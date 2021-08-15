import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import styles from './UploadForm.module.css';

const UploadForm = (props) => {

    //state

    const [temporaryFile, setTemporaryFile] = useState(null);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [adNumberToUpdate, setAdNumberToUpdate] = useState("1");

    //number of ads
    const totalAds = 15;

    //change handlers (for picking the ad to change and handling file upload)

    const selectAdChangeHandler = (e) => {
        let adNumber = e.target.value; 
        if ( adNumber <= totalAds && adNumber > 1) {
            setAdNumberToUpdate(adNumber);
        }
    }

    const fileChangeHandler = (e) => {
        const selectedFile = e.target.files[0]; //not e.target.value!!
        const types = ["image/png", "image/jpeg"];
        if (selectedFile && types.includes(selectedFile.type)) {
            setTemporaryFile(selectedFile);
            setError(null);
        } else {
            setTemporaryFile(null);
            setError("Must be PNG or JPG");
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFile(temporaryFile);
        setTemporaryFile(null);
    }

    const selectAdJSX = (
        <select className={styles.numberInput} defaultValue={adNumberToUpdate} onChange={selectAdChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
        </select>
    )

    return (
            <div style={{textAlign: "center"}}>
                <form onSubmit={submitHandler}>
                    <div className={styles.updateAdNumber}>
                        Update adspace {selectAdJSX}
                    </div>
                    <div style={{color: '#AAA', padding: '20px 0', fontSize: "0.8rem", textAlign: 'left'}}>Now select an image for that ad space. Needs to be JPEG or PNG format. A transparent background is preferable.</div>

                    <input type="file" onClick={e => (e.target.value = null)} onChange={fileChangeHandler}></input><br /><br />
                    <input type="submit" value="Submit" className={styles.submitButton} disabled={!temporaryFile}></input>

                    { error && <div className="error">{error}</div> }

                    { file && <ProgressBar file={file} adNumberToUpdate={adNumberToUpdate} setFile={setFile} setAdNumberToUpdate={setAdNumberToUpdate} setTemporaryFile={setTemporaryFile} /> }
                </form>
            </div>
    )
}

export default UploadForm