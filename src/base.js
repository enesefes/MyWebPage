import Airtable from "airtable"

const base = new Airtable({apiKey: 'YOUR-API-KEY'}).base('YOUR-BASE-ID');

export default base;
