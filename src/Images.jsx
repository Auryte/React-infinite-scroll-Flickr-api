import React, { useState, useRef, useCallback } from 'react';
import './images.scss';
import useGetImages from './hooks/useGetImages';
import Image from './Image';
import { Loader } from './components/Loader';
import { likeImage } from './utils/likeImage';
import { getStoredImages } from './utils/getStoredImages';
import Main from './components/Main';

const Images = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        images,
        loading,
        hasMore,
        error
    } = useGetImages(pageNumber);
    const observer = useRef(),
        lastImageRef = useCallback(node => {
            if (loading) return;
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber(prevPageNumber => prevPageNumber + 1)
                }
            })
            if (node) observer.current.observe(node)
        },
            [loading]
        );

    const renderImagesGrid = () => {
        const imagesFromStorage = getStoredImages();


        return (

            images.map(({ server, id, secret }, index) => {
                const liked = imagesFromStorage.find(el => el.id === id);
                return <div key={id} ref={images.length === index + 1 ? lastImageRef : null}>
                    <Image
                        server={server}
                        id={id}
                        secret={secret}
                        onClick={() => { likeImage({ server, id, secret }) }}
                        liked={liked}
                    />
                </div>
            })
        )
    }


    return (
        <Main>
            <div className="Container">
                {images.length > 0 ?
                    renderImagesGrid()
                    : null
                }
            </div>
            <div> {loading && hasMore ? <Loader /> : null}</div>
            <div>{error && 'Error'}</div>
        </Main>
    )
}

export default Images;


