const contactUs = (fullname, email, subject, phone, description) => {
    let result;
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    //check required input
    if (!email || !fullname || !subject || !phone || !description) {
      result = "All field are required";
    } else {
      //sanitize email input
      if (!email.match(emailFormat)) {
        result = "Please input right email";
      } else {
        //check if input is not a number
        if (typeof phone !== "number" || typeof phone === "string") {
          result = "Invaild phone-number input";
        }
      }
    }
    return result
  };
  
  module.exports = {contactUs}
  
