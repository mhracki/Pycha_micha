import { getApiURL } from "./api";

export function getMedia(media) {
  const imageUrl = media?.url?.startsWith("/")
    ? getApiURL(media?.url)
    : media?.url || "";
  return imageUrl;
}