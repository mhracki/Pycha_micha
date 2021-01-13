import { getApiURL } from "./api";

export function getMedia(media) {
  const imageUrl = media?.url.startsWith('/')
    ? getApiURL(media?.url?.substring(1))
    : media?.url || "";
  return imageUrl;
}
