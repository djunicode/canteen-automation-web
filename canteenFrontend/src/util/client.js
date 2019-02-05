import axios from "axios";
import URI from "urijs";

const BASE_URL = URI("http://127.0.0.1:8000/");

const Menu = {
    create: async (token, item) => {
        const url = URI(BASE_URL).directory("menu")
        return await axios.post(item);
    },

    list: async () => {
        const url = URI(BASE_URL).directory("menu");
        return await axios.get(url);
    },

    get: async (id) => {
        const url = URI(BASE_URL).directory("menu").filename(id);
        return await axios.get(url);
    }
};
