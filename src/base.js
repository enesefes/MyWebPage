import Airtable from "airtable"

const base = new Airtable({apiKey: 'API_KEY'}).base('BASE_ID');

export default base;
