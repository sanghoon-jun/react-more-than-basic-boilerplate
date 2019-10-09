// Load environment
const environment = process.env.NODE_ENV || 'development';

let config = {
  name: process.env.REACT_APP_NAME,
};

if (environment !== 'production') {
  console.log('Current Environment:', environment, config);
}

export default config;
