export interface PlaylistType {
  href: string;
  limit: number;
  previous: string | null;
  next: string | null;
  offset: number;
  total: number;
  items: PlaylistItem[];
}

export interface PlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: PlaylistImage[];
  name: string;
  owner: PlaylistOwnerType;
  public: boolean;
  snapshot_id: string;
  type: string;
  uri: string;
  tracks: {
    href: string;
    total: number;
  };
}

interface PlaylistOwnerType {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: null | string;
}

interface PlaylistImage {
  url: string;
  height: number | null;
  width: number | null;
}
