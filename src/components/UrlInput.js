import React, { useState } from 'react';
import { projectFirestore } from '../firebase/config';

const UrlInput = ({urlNo, urlString, className}) => {

    //todo: so need to put url in state and pull this into value of input field
    const [url, setUrl] = useState(urlString ? urlString : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        projectFirestore.collection('urls').doc(urlNo.toString()).set({'url': url}).then(() => {
        }).catch((err) =>  console.err(err)); 
    }

    const handleChange = (e) => {
        setUrl(e.target.value);
    }
    
    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>
                <label>
                    <div style={{display: "inline-block", width: '30px', fontFamily: 'monospace', color: "#CCC"}}>{urlNo}</div>
                    <input type="text" value={url} onChange={handleChange}></input>
                </label>
                <input type="submit" value="Update"></input>
            </form>
        </div>
    )
}

export default UrlInput;