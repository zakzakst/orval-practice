import fs from "node:fs";
import yaml from "js-yaml";
import merge from "lodash.merge";

function loadYaml(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return yaml.load(content);
}

const file1 = loadYaml("openapi/todos.yaml");
const file2 = loadYaml("openapi/users.yaml");

const merged = merge({}, file1, file2);

fs.writeFileSync("openapi/_bundle.yaml", yaml.dump(merged), "utf8");
console.log("_bundle.yamlを生成しました");
