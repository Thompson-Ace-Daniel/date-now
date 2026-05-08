import { create } from "axios";

const api = create({
  baseURL: "https://date-now-backend.vercel.app/api",
  timeout: 5000,
  headers: { "content-type": "application/json" },
});

export { api };
