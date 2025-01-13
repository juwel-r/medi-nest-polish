import axios from "axios";

const photoUpload = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_API}`,
      formData
    );
    return res.data.data.display_url;
  } catch (error) {
    return null;
  }
};

export default photoUpload;
