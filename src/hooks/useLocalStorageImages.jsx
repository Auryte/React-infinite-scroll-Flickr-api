import { useState, useEffect } from 'react';
import { getStoredImages } from '../utils/getStoredImages';
import { storeImages } from '../utils/storeImages';
import { likeImage } from '../utils/likeImage';

const useLocalStorageImages = () => {
    const [images, setImages] = useState(getStoredImages());

    const likeImage = ({}) => {
        //  Logika, kuri like'ina ...
        // setImages(.. visos nuoptraukos su naujai like/dislike'inta)
    }

    return { likeImage, images };
}

export default useLocalStorageImages;