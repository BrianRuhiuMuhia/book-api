function errorHandling(error, request, response, next) {
    // Handle the error
    response.status(500).send('Internal Server Error');
}
module.exports=errorHandling