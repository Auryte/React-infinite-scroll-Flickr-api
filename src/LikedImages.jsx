import React from 'react';
import Main from './components/Main';
import Image from './Image';
import { getStoredImages } from './utils/getStoredImages';
import { likeImage } from './utils/likeImage';

const LikedImages = () => {
    const imagesFromStorage = getStoredImages();
    console.log("imagesFromStorage", imagesFromStorage)
    return (
        <Main>
            <div className="Container">
                {imagesFromStorage.map(({ server, id, secret }) => {
                    return <div key={id} >
                        < Image
                            server={server}
                            id={id}
                            secret={secret}
                            onClick={() => { likeImage({ server, id, secret }) }}
                            imagesInStorage={getStoredImages}
                        />
                    </div>

                })
                }
            </div>
        </Main>
    )
};

export default LikedImages;
