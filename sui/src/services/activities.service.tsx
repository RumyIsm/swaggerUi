import axios from "axios";

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

export class ActivitiesService {
  async getActivities() {
    const response = await axios.get(BASE_URL);
    return response.data; // Kthen të dhënat e aktiviteteve
  }
  async deleteActivities(id: number) {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data; 
  }
}
