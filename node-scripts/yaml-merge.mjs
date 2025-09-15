import fs from "node:fs";
import yaml from "js-yaml";
import merge from "lodash.merge";

const loadYaml = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  return yaml.load(content);
};

const todos = loadYaml("openapi/todos.yaml");
const users = loadYaml("openapi/users.yaml");
const schedules = loadYaml("openapi/schedules.yaml");

const merged = merge({}, todos, users, schedules);
merged.info = merged.info || {};
merged.info.title = "My App API";

fs.writeFileSync("openapi/_bundle.yaml", yaml.dump(merged), "utf8");
console.log("_bundle.yamlを生成しました");
