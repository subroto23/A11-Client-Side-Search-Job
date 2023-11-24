import emailjs from "@emailjs/browser";
import UseAuth from "./UseAuth";
const UseSendEmail = () => {
  const { user } = UseAuth();
  const data = {
    from_email: "subroto23das@gmail.com",
    from_name: "jobSearch.com",
    to_email: user?.email,
    to_name: user?.displayName,
    message: "Your Application apply is Confirmed.",
  };
  const SendDataValue = emailjs
    .send("service_w1wqrp9", "template_j6rkvvo", data, "CspRuIYP57Sr9m8Nh")
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  return SendDataValue;
};

export default UseSendEmail;
