import algoliasearch from 'algoliasearch';

const ALGOLIA_APP_ID = 'INY4JU9JPK';
const ALGOLIA_API_KEY = 'a91866aa135d9a3a3355599dc8f18e11';

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY, {
  protocol: 'https:'
});
const index = client.initIndex('verb_search');

export default index;
