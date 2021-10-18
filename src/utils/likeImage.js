import { getStoredImages } from "./getStoredImages";
import { storeImages } from "./storeImages";

export const likeImage = ({id, server, secret }) => {
    const imagesFromStorage = getStoredImages();
    let imageIdInStorage = imagesFromStorage.find(el => el.id === id);
    if (imageIdInStorage === undefined) {
        imagesFromStorage.push({id, server, secret });
    } else {
        const index = imagesFromStorage.findIndex(el => el.id === id);
        imagesFromStorage.splice(index, 1);
    };
    storeImages(imagesFromStorage);
};

