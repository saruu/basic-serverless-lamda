exports.randomNumberGenerator = async (event) => {
 const randomNumber = parseInt(Math.random *10);
 console.log(process.env.AWS_SECRET_ACCESS__KEY)
 console.log("The random number is ", randomNumber);
 return randomNumber;
};
