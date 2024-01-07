import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "http://127.0.0.1:8080/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/lib/generated/": {
      preset: "client",
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write ."] },
}

export default config
