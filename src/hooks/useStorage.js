import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

const useStorage = (file, adNumberToUpdate) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    console.log(adNumberToUpdate);

    useEffect(() => {
        const storageRef = projectStorage.ref(adNumberToUpdate);
        const collectionRef = projectFirestore.collection('images');
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred/snap.totalBytes * 100);
            setProgress(percentage)
        }, (err) => {
            setError(err) 
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.doc(adNumberToUpdate + '_image').set({'url': url, 'updatedAt': createdAt})
            setUrl(url);
        })
    }, [file, adNumberToUpdate]);

    return { progress, url, error }

}

export default useStorage;