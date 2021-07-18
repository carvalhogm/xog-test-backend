import mongoose from 'mongoose'

mongoose.Promise = global.Promise

let DB_URL = `mongodb://127.0.0.1:27017/xogito-test`

function connect() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  };
  mongoose.connect(DB_URL, options).catch(e => {
    console.log('Mongoose WARNING', e)
    process.nextTick(() => {
      throw new Error('Mongoose could not reconnect to MongoDB server');
    });
  })
}

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
  console.log('Trying to reconnect')
  setTimeout(connect, 3000)
})

mongoose.connection.on('error', err => {
  console.log('Mongoose default connection disconnected: ', err.message)
  console.log('Trying to reconnect')
  setTimeout(connect, 3000)
});

connect()

export default mongoose
