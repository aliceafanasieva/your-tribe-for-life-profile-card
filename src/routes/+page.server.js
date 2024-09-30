import fetchJson from "$lib/fetch-json";

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/';
  const persons = await fetchJson(url);
  const person = persons.data.find(person => 
    person.name === "Alisa" && person.surname === "Afanasieva"
  );
  return {
    person
  };
}

