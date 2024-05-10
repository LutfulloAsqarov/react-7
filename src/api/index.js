import axios from "axios";

const MainUrl = axios.create({
    baseURL: "https://dummyjson.com/",
});

export default MainUrl;
