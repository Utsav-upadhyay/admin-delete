export interface IPub {
  PubId: number;
  Title: string;
  MastHead: string;
  Circulation: number;
  WebSite: string;
  Issn_Num: string;
  Place: number;
  city: string;
}

export interface IArticle {
  Title: string;
  articleid: string;
  pubdate: string;
  ave: number;
  userid: string;
  publication: string;
  Edition: string;
  keyword: string;
  Filter: string;
  Filte_String: string;
}