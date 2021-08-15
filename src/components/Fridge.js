import React, { useState } from 'react';
import TopDoor from './TopDoor';
import BottomDoor from './BottomDoor';

const Fridge = ({images, urlArray}) => {

    const [isTopOpen, setIsTopOpen] = useState(false);
    const [isBottomOpen, setIsBottomOpen] = useState(false);

    //this goes through the images in firestore and splits them into upper and lower door url lists
    //its vicious and nasty code
    const topDoorAds = [...Array(6)];
    const bottomDoorAds = [...Array(15)];

    for(let i=0; i<images.length; i++) {
        //const imageNo = Number(images[i].id[0]); //here's the error! it takes just the FIRST number, what about double digits!!
        let imageNo = null;
        const indexString = images[i].id;
        const imageSubstring = indexString.substring(0,2);
        if (isNaN(imageSubstring.slice(-1))) {
            imageNo = Number(imageSubstring.substring(0, 1));
        } else {
            imageNo = Number(imageSubstring);
        }
        if(imageNo <= 6) {
            if (images[i].url) topDoorAds[imageNo-1] = (images[i].url)
        } else if (imageNo > 6 && imageNo <= 15) {
            if (images[i].url) bottomDoorAds[imageNo-1] = (images[i].url)
        }

    }    
    
    return (
        <div>
            <div className="above-fridge"></div>
            <TopDoor isTopOpen={isTopOpen} setIsTopOpen={setIsTopOpen} images={topDoorAds} urlArray={urlArray}/> 
            <BottomDoor isBottomOpen={isBottomOpen} setIsBottomOpen={setIsBottomOpen} images={bottomDoorAds} />
            <div className="underneath-fridge">
                <div className="disclaimer">Image take from timwrite.com/fridge, who retains copyright. For private demonstration purposes only</div>
            </div> 
        </div>
    )
}

export default Fridge