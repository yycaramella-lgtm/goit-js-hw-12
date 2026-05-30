import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33134481-5dd34c0597b8956a5c7f23b76';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}