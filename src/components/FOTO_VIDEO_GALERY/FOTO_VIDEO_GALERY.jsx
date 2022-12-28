import "./Foto.scss"
import React, {useState} from 'react';

function FotoVideoGalery(props) {
    const [switcher,setSwitcher] = useState(false);
    return (
        <div className="photoVideo">
            <div className="photoContainer">
                <div className="title">
                    🎞 Mediagalereya
                </div>
                <div className="content">
                    <div className="content-header">
                        <div className="switcher">
                            <h1 className={!switcher?"switched_right":"switched_right"} onClick={()=>setSwitcher(false)}>Videogalereya</h1>
                            <h1 className={switcher?"switched_left":"unactive_left"} onClick={()=>setSwitcher(true)}>Fotogalereya</h1>
                        </div>
                        <div className="link">
                            Barchasini ko‘rish
                        </div>
                    </div>
                    <div className="content">
                        {switcher?<h1>Fotogalereya</h1>:<h1>Videogalereya</h1>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FotoVideoGalery;