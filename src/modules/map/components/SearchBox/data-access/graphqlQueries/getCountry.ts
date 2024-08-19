export const GET_COUNTRY = `
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      code
      continent {
        name
      }
      capital
      emoji
      emojiU
      currency
      languages {
        code
        name
      }
    }
  }
`;
