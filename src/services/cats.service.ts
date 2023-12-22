import axios from "axios";
import { Cat } from '../models/cat';
import { configDev } from '../config/config.dev';

class CatsService {
	getCat(): Promise<Cat[]> {
		return axios.get<Cat[]>(`${configDev.apiUrl}/images/search`).then(response => response.data);
	}
	get10Cats(): Promise<Cat[]> {
		return axios.get<Cat[]>(`${configDev.apiUrl}/images/search?limit=10`).then(response => response.data);
	}
}

const instance = new CatsService();

export { instance as CatsService };
