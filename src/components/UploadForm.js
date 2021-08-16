import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import styles from './UploadForm.module.css';
import fridgeNumbers from '../assets/fridge_numbers.png';

const UploadForm = (props) => {

    //state

    const [temporaryFile, setTemporaryFile] = useState(null);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [adNumberToUpdate, setAdNumberToUpdate] = useState("1");

    //number of ads
    const totalAds = 25;

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
        const size = e.target.files[0].size;
        console.log(size)
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
            <option value="1">Top Door: 1</option>
            <option value="2">Top Door: 2</option>
            <option value="3">Top Door: 3</option>
            <option value="4">Top Door: 4</option>
            <option value="5">Top Door: 5</option>
            <option value="6">Top Door: 6</option>
            <option value="7">Bottom Door: 7</option>
            <option value="8">Bottom Door: 8</option>
            <option value="9">Bottom Door: 9</option>
            <option value="10">Bottom Door: 10</option>
            <option value="11">Bottom Door: 11</option>
            <option value="12">Bottom Door: 12</option>
            <option value="13">Bottom Door: 13</option>
            <option value="14">Bottom Door: 14</option>
            <option value="15">Bottom Door: 15</option>
            <option value="16">Inside Top: 16</option>
            <option value="17">Inside Top: 17</option>
            <option value="18">Inside Top: 18</option>
            <option value="19">Inside Top: 19</option>
            <option value="20">Inside Bottom: 20</option>
            <option value="21">Inside Bottom: 21</option>
            <option value="22">Inside Bottom: 22</option>
            <option value="23">Inside Bottom: 23</option>
            <option value="24">Inside Bottom: 24</option>
            <option value="25">Inside Bottom: 25</option>
        </select>
    )

    return (
            <div style={{textAlign: "center"}}>
                <img src={fridgeNumbers} alt="fridge ad number layout" style={{width: '150px', marginBottom: '20px', opacity: '0.6'}}/>
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