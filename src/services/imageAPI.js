import axios from 'axios';

const getImages = ({ searchQuery, page = 1 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?key=21947643-3ad5511e98ce1ab16d6eede2a&q=${searchQuery}&image_type=photo&page=${page}&per_page=12&orientation=horizontal`,
        )
        .then(res => res.data.hits);
};

export default getImages;
