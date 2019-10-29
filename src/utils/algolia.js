import algoliasearch from 'algoliasearch';

const ALGOLIA_APP_ID = 'EFUSVI90OG';
const ALGOLIA_API_KEY = '742187bbed0b6b3178c86216dc341b61';

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY, {
  protocol: 'https:'
});
const index = client.initIndex('verb_search');

export default index;
