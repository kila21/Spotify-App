export interface UserProfileInfo {
  playlist: number;
  following: number;
  followers: number;
  image: { url: string; width: number; height: number };
  display_name: string;
}
