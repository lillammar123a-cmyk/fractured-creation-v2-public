const readSetting = (name, fallback) => {
  const value = process.env[name];

  return typeof value === "string" && value.trim()
    ? value.trim()
    : fallback;
};

const nodeEnv = readSetting("NODE_ENV", "development");

export const config = Object.freeze({
  botName: readSetting("BOT_NAME", "Supreme Weaver"),
  worldName: readSetting("WORLD_NAME", "The Fractured Creation"),
  prefix: readSetting("BOT_PREFIX", "."),
  nodeEnv,
  isProduction: nodeEnv === "production",
});