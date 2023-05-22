import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "8053ef0d-a0d8-44fb-ac14-057bfed8ccbc", // Get this from tina.io
  token: "8ee32243465a683edc325c3528a0d516ba9fe8f2", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "gallery",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/post",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // {
      //   name: "gallery",
      //   label: "Photo Gallery",
      //   path: "public/gallery",
      //   fields: [
      //     {
      //       type: "image",
      //     }
      //   ]
      // }
    ],
  },
});
