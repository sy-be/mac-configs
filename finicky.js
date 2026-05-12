export default {
  defaultBrowser: {
    name: "Google Chrome",
    profile: "Work",
  },
  rewrite: [
    {
      match: ({ url }) => url.protocol === "http",
      url: (url) => {
        url.protocol = "https";
        return url;
      },
    },
  ],
  handlers: [
    {
      match: [
        /^https?:\/\/.*reddit\.com\/.*$/,
        /^https?:\/\/.*youtube\.com\/.*$/,
        /^https?:\/\/.*youtu\.be\/.*$/,
        /^https?:\/\/.*amazon\.co\.uk.*$/,
        /^https?:\/\/.*degiro.*$/,
        /^https?:\/\/.*\.az\/.*$/,
      ],
      browser: "Firefox",
    },
  ],
};
