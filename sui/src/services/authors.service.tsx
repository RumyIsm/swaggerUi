import axios from 'axios';

const BASE_URL = 'https://fakerestapi.azurewebsites.net/api/v1/Authors';

export class AuthorsService {
  async getAuthors() {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
async deleteAuthor(id: number) {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  }
}
