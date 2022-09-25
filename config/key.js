/* 
- production(배포) 모드: mongoDB URI를 prod.js에서 가져온다
- dev(개발)모드: mongoDB URI를 dev.js에서 가져온다
*/

if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
