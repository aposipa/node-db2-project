const server = require('./api/server.js');

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n == Server Running on Port ${port} ==\n`));


// SAMPLE POST DATA
// {
//     "id": 1,
//     "VIN": 12345,
//     "make": "Toyota",
//     "model": "Corolla",
//     "mileage": 41659,
//     "transmission type": "automatic",
//     "title status": "clean"
// }