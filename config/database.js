module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(
        "DATABASE_HOST",
        "shimantodb.cymulbyz8bag.us-east-1.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "shimanto"),
      user: env("DATABASE_USERNAME", "shimanto"),
      password: env("DATABASE_PASSWORD", "shimanto"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

// API Token
// 7fc734f9091a69deef4baed1920a561b255bcdc3bc32a7156cb3df98d7a38145672a77095fba0c510edc2ef48f8024064b280bb2fb1c751aa75d2ff6484acbd19da1f4c31b12dd198457fb16c75df03cf85975a3e31d4c97984b607878edfd3d419b5e88a4569fd68507c47df79d4736a3ca72ea8d26145deda316f6ac783a65
