export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const API_ENDPOINTS = {
  searchAsset: (keyword: string) => `api/stocks/search?keyword=${encodeURIComponent(keyword)}`,
};
