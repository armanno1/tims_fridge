import React from 'react';
import Ad from './Ad';

const TopDoor = ({ isTopOpen, setIsTopOpen, images, urlArray }) => {

    const toggleTopOpen = () => {
        setIsTopOpen(!isTopOpen);
      };
      
    return (
        <div className={`wrapper top-door ${isTopOpen ? `open` : null}`}>
        <div className="door">
            <div className="top-door-top-row">
                <Ad imageUrl={images[0]} number="1" urls={urlArray.slice(0, 4)}/>
                <Ad imageUrl={images[1]} number="2" urls={urlArray.slice(4, 8)}/>
                <Ad imageUrl={images[2]} number="3" urls={urlArray.slice(8, 12)}/>
            </div>
            <div className="top-door-bottom-row">
                <div className="top-door-handle-container">
                    <div className="top-handle" onClick={toggleTopOpen}></div>
                    <Ad imageUrl={images[3]} number="4" urls={urlArray.slice(12, 16)} />
                </div>
                <Ad imageUrl={images[4]} number="5" urls={urlArray.slice(16, 20)} />
                <Ad imageUrl={images[5]} number="6" urls={urlArray.slice(20, 24)} />
            </div>
        </div>
        <div className="bg" onClick={toggleTopOpen}></div>
    </div>
    )
};

export default TopDoor;