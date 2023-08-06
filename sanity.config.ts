import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import subscribedEmail from "./sanity/subscribedEmail";
import course from "./sanity/course";
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";

import { apiVersion, projectId, dataset } from "./sanity/env";
import applicant from "./sanity/applicant";

export default defineConfig({
  name: "default",
  title: "Code Academy",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [subscribedEmail, course, applicant],
  },
});
