exports.randomNumberGenerator = async (event) => {
 const randomNumber = parseInt(Math.random *10);
 console.log(process.env.SERVERLESS_ACCESS_KEY)
 console.log("The random number is ", randomNumber);
 return randomNumber;
};
