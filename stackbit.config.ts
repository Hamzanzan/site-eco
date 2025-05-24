import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "hugo",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "text", required: true },
            { name: "image", type: "image", required: false },
            { name: "layout", type: "string", required: false },
            { name: "menu", type: "string", required: false },
            { name: "weight", type: "number", required: false }
          ]
        },
        {
          name: "Article",
          type: "page",
          urlPath: "/articles/{slug}",
          filePath: "content/articles/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "text", required: true },
            { name: "image", type: "image", required: false },
            { name: "date", type: "datetime", required: false },
            { name: "author", type: "string", required: false },
            { name: "categories", type: "list", required: false },
            { name: "tags", type: "list", required: false },
            { name: "draft", type: "boolean", required: false }
          ]
        },
        {
          name: "Home",
          type: "page",
          urlPath: "/",
          filePath: "content/_index.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "text", required: true },
            { name: "image", type: "image", required: false }
          ]
        }
      ]
    })
  ]
}); 