export const storeImages = (item) => {
    return  localStorage.setItem("likedImages", JSON.stringify(item))
}
