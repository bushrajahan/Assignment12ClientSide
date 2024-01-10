import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:300",
});

const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;
