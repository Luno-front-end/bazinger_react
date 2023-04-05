import axios from "axios";

 const sendFeetBack = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  try {
    await axios.post("http://localhost:8080/feetback", {
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
    sendFeetBack
}

export default API