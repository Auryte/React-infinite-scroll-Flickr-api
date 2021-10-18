export const getStoredImages = () => {
    return JSON.parse(localStorage.getItem("likedImages"));
}
