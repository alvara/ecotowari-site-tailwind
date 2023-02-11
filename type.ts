export interface ISticker {
  id: number;
  qty: number;
  created: string; // use string instead Date for serialization for staticProps
  started: string;
  notes?: string;
  createdBy?: {
    id: string;
    name: string;
  };
}

export interface ITeam {
  id: number;
  name: string;
  email?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  website?: string;
  role: string;
  avatar: IAirtableImage[];
  bio: string;
}

export interface IInstagram {
  id: number;
  image: IAirtableImage[];
  notes?: string;
  publishDate: string;
  status?: string | null;
  url: string;
}

export interface IAirtableImage {
  id: string;
  filename: string;
  height: number;
  size: number;
  thumbnails: {
    full: {
      height: number;
      url: string;
      width: number;
    };
    large: {
      height: number;
      url: string;
      width: number;
    };
    small: {
      height: number;
      url: string;
      width: number;
    };
  };
  type: string;
  url: string;
  width: number;
}
