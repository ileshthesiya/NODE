// const {expressJwt:jwt} = require("express-jwt");
// functionv
// function authJwt() {
//     const secret = process.env.secret;
//     const api = process.env.API_URL;
//     return expressJwt({
//         secret,
//         algorithms: ["HS256"],
//         isRevoked: isRevoked
//     });
// }

// module.exports = authJwt;



const { expressjwt: jwt } = require("express-jwt");
function express_jwt() {
  const secret = process.env.secret;
  return jwt({
    secret: secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
    //   { url: "/categories", methods: ["GET", "OPTIONS"] },
    //   `/users/login`,
    //   `/users/register`,
    `/userlogin/login`
    ],
  });
}

module.exports = express_jwt;