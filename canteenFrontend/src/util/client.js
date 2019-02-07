import URI from "urijs";

const BASE_URL = "http://127.0.0.1:8000/";
const endpoint = () => URI(BASE_URL);

export default endpoint;
