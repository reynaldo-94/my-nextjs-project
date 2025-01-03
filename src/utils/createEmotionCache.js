import createCache from "@emotion/cache";

// const isBrowser = typeof document !== "undefined";

// Crea una instancia de caché de Emotion
const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

export default createEmotionCache;
