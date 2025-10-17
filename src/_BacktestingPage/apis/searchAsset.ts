import type { SearchResult } from "../types/backtestFormType";
import { BACKEND_BASE_URL, API_ENDPOINTS } from "@/constants/api";

export const searchAsset = async (query: string): Promise<SearchResult[]> => {
  if (!query) return [];

  const res = await fetch(`${BACKEND_BASE_URL}${API_ENDPOINTS.searchAsset(query)}`);

  if (!res.ok) {
    console.error("Failed to fetch serach result");
    return [];
  }
  const data = await res.json();
  return data as SearchResult[];
};
