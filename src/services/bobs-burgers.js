export async function getSelected(select) {
  const response = await fetch(
    `https://bobsburgers-api.herokuapp.com/${select}?sortBy=name&OrderBy=desc&limit=25`
  );

  const data = await response.json();

  return data;
}

export async function selectDetail(select, id) {
  const response = await fetch(
    `https://bobsburgers-api.herokuapp.com/${select}/${id}`
  );

  const data = await response.json();

  return data;
}
