var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
    process.env.PORT = 4001;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Comments'
} else if(env === 'test') {
    process.env.PORT = 4001;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Comments'
}