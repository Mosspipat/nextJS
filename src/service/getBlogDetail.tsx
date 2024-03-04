import axios from "axios";

const localUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

const getBlogDetail = async () => {
  try {
    const detail = await axios.get("");
  } catch (error) {
    console.log(console.error(error));
  }
};
