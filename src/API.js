// const url = "https://www.flickr.com/services/rest"
// const requestOptions = {
//     method: 'flickr.galleries.getPhotos',
//     api_key: '054062ceb921d3dadd8debd87dd99612',
//     gallery_id: '66911286-72157677780731583',
//     per_page: perPage,
//     page: pageNumber,
//     format: "json",
//     nojsoncallback: 1,
// };


const fetchImages = async ( pageNumber, perPage) => {
    try {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=054062ceb921d3dadd8debd87dd99612&gallery_id=66911286-72157677780731583&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`);
        return await response.json();
    } catch (error) {
       throw error;
    }
}

const API = {
    fetchImages
};

export default API;
