module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

// const parse = require('pg-connection-string').parse;

// module.exports = ({ env }) => {

//   if (env('NODE_ENV') === 'production') {
//     const config = parse(process.env.DATABASE_URL);
//     return {
//       defaultConnection: 'default',
//       connections: {
//         default: {
//           connector: 'bookshelf',
//           settings: {
//             client: 'postgres',
//             host: config.host,
//             port: config.port,
//             database: config.database,
//             username: config.user,
//             password: config.password,
//             ssl: {
//               rejectUnauthorized: false
//             }
//           },
//           options: {
//             ssl: true,
//           },
//         },
//       },
//     }
//   }

//   return {
//     defaultConnection: 'default',
//     connections: {
//       default: {
//         connector: 'bookshelf',
//         settings: {
//           client: 'postgres',
//           host: env('DATABASE_HOST', '127.0.0.1'),
//           port: env.int('DATABASE_PORT', 5432),
//           database: env('DATABASE_NAME', 'aym'),
//           username: env('DATABASE_USERNAME', 'postgres'),
//           password: env('DATABASE_PASSWORD', '6625'),
//           ssl: env.bool('DATABASE_SSL', false),
//         },
//         options: {}
//       },
//     },
//   };
// }




