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

export interface IInstagram {
  id: string;
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
