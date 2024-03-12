import axios from "axios";

const localUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

export const getBlogDetail = async (id: number) => {
  try {
    const detail = await axios.get(
      `http://localhost:3000/api/blogDetail/${id}`
    );
    return detail.data;
  } catch (error) {
    console.log(console.error(error));
  }
};
