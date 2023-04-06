import axios from "axios";

export const getBlogPosts = async () => {
  try {
    const response = await axios("/api/blog-posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
