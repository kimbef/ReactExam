const mongoose = require('mongoose')



async function configDatabase() {
  const connectionString = 'mongodb://localhost:27017/ReactDB';
  await mongoose.connect(connectionString);
  console.log('Database connected');



}
module.exports = { configDatabase };