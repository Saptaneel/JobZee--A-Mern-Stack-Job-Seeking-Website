import mongoose from 'mongoose';

const mongoURL = 'mongodb://localhost:27017/MERN_JOB_SEEKING_WEBAPP';

export const dbConnection = () => {
  mongoose.connect(mongoURL, {
    
    dbName: 'MERN_JOB_SEEKING_WEBAPP',
  })
  .then(() => {
    console.log('Connected to database.');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });
};
