var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
    process.env.PORT = 4000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Article'
} else if(env === 'test') {
    process.env.PORT = 4000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Article'
}