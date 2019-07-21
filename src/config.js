import dotEnv from "dotenv";

const dotEnvConfig = dotEnv.config();
let Config;

if (dotEnvConfig.error) {
  Config = process.env;
} else {
  Config = dotEnvConfig.parsed;
}

module.exports = Config;
