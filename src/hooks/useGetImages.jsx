import { useState, useEffect } from 'react';
import { getStoredImages } from '../utils/getStoredImages';
import { storeImages } from '../utils/storeImages';
import API from '../API';

const useGetImages = (pageNumber) => {
    const [images, setImages] = useState([]),
        [loading, setLoading] = useState(true),
        [error, setError] = useState(false),
        [hasMore, setHasMore] = useState(true),
        perPage = 6;

    useEffect(() => {
        setLoading(true);
        setError(false)

        const fetchImages = async () => {
            try {
                let data = await API.fetchImages(pageNumber, perPage);

                if (getStoredImages()) storeImages(getStoredImages())
                else storeImages([])

                if (data.photos.photo.length === perPage) {
                    setImages(prevImages => {
                        return [...new Set([...prevImages, ...data.photos.photo])]
                    })
                    setLoading(false)
                } else if (data.photos.photo.length > 0 && data.photos.photo.length < perPage) {
                    setImages(prevImages => {
                        return [...new Set([...prevImages, ...data.photos.photo])]
                    })
                    setLoading(false)
                    setHasMore(false)
                }
                else { setHasMore(false) }
            } catch (error) {
                console.log(error);
                setError(true)
            }
        }
        fetchImages();

    }, [pageNumber]);

    return { images, loading, error, hasMore }
}

export default useGetImages;