import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "9ca528b8-9162-41b7-b3d0-10f489974fa1", // Get this from tina.io
  token: "c7bb4f5151e127c3db38ee47d131ede99897e9cd", // Get this from tina.io

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
