import axios from "axios";

const sendFeetBack = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  try {
    await axios.post("https://bazinger-backend.onrender.com/feetback", {
      name,
      email,
      subject,
      message,
    });
  } catch (error) {
    console.log(error);
  }
};

const API = {
  sendFeetBack,
};

export default API;
