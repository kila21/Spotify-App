export interface getTopArtistsResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: artistsItem[];
}

export interface artistsItem {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: artistImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface artistImage {
  url: string;
  height: number;
  width: number;
}
