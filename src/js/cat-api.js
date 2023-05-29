const urlBreed = 'https://api.thecatapi.com/v1/breeds';
const urlImg = 'https://api.thecatapi.com/v1/images';

const API =
  'live_hf51EBV20gyEt13QUmfXN5p0tLMiqnO8q5y6PlezBPFYjeecZ8FLGobYMwGYYloV';


const fetchBreeds = () => {
  return fetch(`${urlBreed}?api_key=${API}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};


const fetchCatByBreed = breedId => {
  return fetch(`${urlImg}/${breedId}?api_key=${API}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};


export { fetchBreeds, fetchCatByBreed };