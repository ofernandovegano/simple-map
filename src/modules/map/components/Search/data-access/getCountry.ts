import { graphQLApi } from '@/shared/services/graphql';
import { GET_COUNTRY } from './graphqlQueries/getCountry';
import { GetCountryRes } from './types/getCountry';

export async function getCountry(code: string) {
    const requestUrl = '/';

    const requestBody = {
        query: GET_COUNTRY,
        variables: { code },
      };    

    const res = await graphQLApi<GetCountryRes>(requestUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    return res?.data.country
}
