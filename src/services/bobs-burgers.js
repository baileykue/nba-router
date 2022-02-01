export async function getSelected(select) {
  const response = await fetch(
    `https://bobsburgers-api.herokuapp.com/${select}?limit=25`
  );

  const data = await response.json();

  return data;
}
