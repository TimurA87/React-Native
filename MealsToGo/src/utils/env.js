const liveHost = "";
const localhost = "http://192.168.43.168:5001/mealstogo-83ce2/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localhost : liveHost;
