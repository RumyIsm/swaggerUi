import axios from 'axios';

const BASE_URL = 'https://fakerestapi.azurewebsites.net/api/v1/Books';

export class BooksService {
  async getBooks() {
    const response = await axios.get(BASE_URL);
    return response.data;
  }

  async deleteBook(id: number) {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data; 
  }
}
