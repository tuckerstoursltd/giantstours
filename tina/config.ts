import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "gallery",
        label: "Gallery",
        path: "src/content/gallery",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Photo Entry",
            name: "photoentry",
            type: "object",
            fields: [
              {
                label: "Photo",
                name: "photo",
                type: "image",
                required: true,
              },
              {
                label: "Photographer",
                name: "photographer",
                type: "string",
              },
              {
                label: "Description",
                name: "description",
                type: "string",
              },
              {
                label: "Accessibility Description",
                name: "alt",
                type: "string",
                required: true,
              },
            ],
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.alt };
              },
            },
          },
        ]
      }
    ],
  },
});
