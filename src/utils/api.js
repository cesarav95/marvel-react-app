const BASE_URL = 'http://localhost:3027';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + 1;
const simulateNetworkLatency = (min = 5000, max = 8000) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  heroes: {
    getAll() {
      //throw new Error('501: Error Interno.');
      //return [];
      return callApi('/heroes');
    },
    create(data) {
      //throw new Error('501: Error Interno.');
      return callApi('/heroes', { method: 'POST', body: JSON.stringify(data) });
    },
    detail(id) {
      return callApi(`/heroes/${id}`, { method: 'GET' });
    },
  },
};

export default api;
