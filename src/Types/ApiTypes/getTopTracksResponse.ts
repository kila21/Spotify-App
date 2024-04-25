export interface ArtistsType {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface TracksImage {
  height: number;
  url: string;
  width: number;
}

export interface TracksItem {
  album: {
    album_type: string;
    artists: ArtistsType[];
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: TracksImage[];
    name: "2001";
    release_date: "1999-11-16";
    release_date_precision: "day";
    total_tracks: 23;
    type: "album";
    uri: "spotify:album:7q2B4M5EiBkqrlsNW8lB7N";
  };
  artists: ArtistsType[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: string;
  uri: string;
}
