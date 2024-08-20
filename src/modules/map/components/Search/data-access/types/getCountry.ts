export type Country = {
  "name": string;
  "code": string;
  "continent": {
    "name": string;
  },
  "capital": string;
  "emoji": string,
  "emojiU": string;
  "currency": string;
  "languages": [
    {
      "code": string,
      "name": string
    }
  ]
}


export type GetCountryRes = {
  "data": { "country": Country }
}