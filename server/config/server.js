module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "eRx1eIFP/RWlsRSrWKvnlg==",
      "jn9UFihP93d8klX9FW3BkA==",
      "w4GZR+Mh2qyYfGfJvGJqHQ==",
      "c8ikerPvG5VQUf8tcMfFZQ==",
    ],
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
