exports.PORT = process.env.PORT || 8000;

exports.CLIENT_ORIGIN =
  process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_ORIGIN
    : 'http://localhost:3000';

exports.DB_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb+srv://yusuf123:yusuf123@devconnector-xtrng.mongodb.net/simple-email-confirmation?retryWrites=true&w=majority';
