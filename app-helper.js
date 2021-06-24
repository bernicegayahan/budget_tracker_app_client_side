//the goal for thie module is to shorted the written code in various sections of the project.
module.exports = {
	API_URL: process.env.NEXT_PUBLIC_API_URL, 
	getAccessToken : () => localStorage.getItem('token'),
	toJSON: (response) => response.json() 
}