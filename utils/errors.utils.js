//Creating function SignIn and SignUp errors string

//If my request return errors, I display errors custom strings

// Function SignUp Errors
module.exports.signUpErrors = (err) => {
  let errors = { email: "" };

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

//Function SignIn Errors
module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};
