import axios from 'axios';
const API_BASE_URL = 'https://api.quran.com/api/v4';
const QuranApi = {
  fetchQuranicText: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/quran/editions`);
      return response.data.editions;
    } catch (error) {
      throw new Error('Failed to fetch Quranic text.');
    }
  },
  // Other API functions for search, recitation, translation, etc.
};
export default QuranApi;