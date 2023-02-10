// TODO: can you import notion types here to simplify type definition?
export interface NotionPost {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: Date;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: {
    type: 'file' | 'external';
    file?: {
      url: string;
      expiry_time: string;
    };
    external?: {
      url: string;
    };
  } | null;
  icon: null;
  parent: {
    type: 'database_id';
    database_id: string;
  };
  archived: boolean;
  properties: {
    Tags: {
      id: string;
      type: 'multi_select';
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
    DateCreated: {
      id: string;
      type: 'created_time';
      created_time: Date;
    };
    LastUpdated: {
      id: string;
      type: 'last_edited_time';
      last_edited_time: Date;
    };

    Status: {
      id: string;
      type: 'status';
      status: {
        id: string;
        name: string;
        color: string;
      };
    };
    RelatedPosts: {
      id: string;
      type: 'relation';
      relation: [];
      has_more: boolean;
    };
    Snippet: {
      id: string;
      type: 'rich_text';
      rich_text: [];
    };
    Description: {
      id: string;
      type: 'rich_text';
      rich_text: [
        {
          type: 'text';
          text: {
            content: string;
            link: string | null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: null;
        }
      ];
    };
    Title: {
      id: string;
      type: 'title';
      title: [
        {
          type: 'text';
          text: {
            content: string;
            link: string | null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: string | null;
        }
      ];
    };
    Priority: {
      id: string;
      type: 'select';
      select: {
        id: string;
        name: string;
        color: string;
      };
    };
    Category: {
      id: string;
      type: 'select';
      select: {
        id: string;
        name: string;
        color: string;
      };
    };
    PostSlug: {
      id: string;
      type: 'rich_text';
      rich_text: [
        {
          type: 'text';
          text: {
            content: string;
            link: string | null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: null;
        }
      ];
    };

    // excluded properties
    // '!How to Implement': {
    //   id: string;
    //   type: 'rich_text';
    //   rich_text: [];
    // };
    // '!Related Teacher': {
    //   id: string;
    //   type: 'relation';
    //   relation: [];
    //   has_more: boolean;
    // };
    // '!URL': {
    //   id: string;
    //   type: string;
    //   url: string | null;
    // };
    // '!Focus': {
    //   id: string;
    //   type: 'checkbox';
    //   checkbox: boolean;
    // };
    // '!Date of Focus': {
    //   id: string;
    //   type: 'date';
    //   date: Date | string | null;
    // };
    // '!Purpose': {
    //   id: string;
    //   type: 'rich_text';
    //   rich_text: [];
    // };
    // '!Current Status': {
    //   id: string;
    //   type: 'rich_text';
    //   rich_text: [];
    // };
    // '!Focus Date': {
    //   id: string;
    //   type: 'date';
    //   date: Date | null;
    // };
  };
  url: string;
}

export interface IArticlesFilter {
  category?: string;
}
