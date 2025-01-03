import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config.js";

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
