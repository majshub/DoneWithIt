import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://donewithit-api-node.onrender.com/api",
  },
  staging: {
    apiUrl: "https://donewithit-api-node.onrender.com/api",
  },
  prod: {
    apiUrl: "https://donewithit-api-node.onrender.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;

  const releaseChannel = Constants.manifest?.releaseChannel;

  if (releaseChannel === "staging") return settings.staging;

  return settings.prod;
};

export default getCurrentSettings();
