import axios from "axios";

export class UserService {
    private readonly baseUrl = `/api`;

    getAll() {
        return axios.get(`${this.baseUrl}/users`);
    }

    getById(id: string) {
        return axios.get(`${this.baseUrl}/users/${id}`);
    }

    create(data: { name: string, email: string, role: string }) {
        return axios.post(`${this.baseUrl}/users`, data);
    }

    update(id: string, data: { name: string, email: string }) {
        return axios.put(`${this.baseUrl}/users/${id}`, data);
    }

    revome(id: string) {
        return axios.delete(`${this.baseUrl}/users/${id}`);
    }
}