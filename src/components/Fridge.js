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
    const insideTopAds = [...Array(19)];
    const insideBottomAds = [...Array(25)];

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
        if(imageNo <= 6) { //6 images in topDoorAds
            if (images[i].url) topDoorAds[imageNo-1] = (images[i].url)
        } else if (imageNo > 6 && imageNo <= 15) { // 9 images in bottomDoorAds
            if (images[i].url) bottomDoorAds[imageNo-1] = (images[i].url)
        } else if (imageNo > 15 && imageNo <= 19) { //4 images in insideTopAds
            if (images[i].url) insideTopAds[imageNo-1] = (images[i].url)
        } else if (imageNo > 19 && imageNo <= 25) { // 6 images in insideBottomAds
            if (images[i].url) insideBottomAds[imageNo-1] = (images[i].url)
        }
    }    
    
    return (
        <div>
            <div className="above-fridge"></div>
            <TopDoor isTopOpen={isTopOpen} setIsTopOpen={setIsTopOpen} images={topDoorAds} urlArray={urlArray} insideTopAds={insideTopAds}/> 
            <BottomDoor isBottomOpen={isBottomOpen} setIsBottomOpen={setIsBottomOpen} images={bottomDoorAds} insideBottomAds={insideBottomAds}/>
            <div className="underneath-fridge">
                <div className="disclaimer">Image take from timwrite.com/fridge, who retains copyright. For private demonstration purposes only</div>
            </div> 
        </div>
    )
}

export default Fridge