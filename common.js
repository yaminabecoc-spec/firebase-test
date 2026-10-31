const playerId =
  localStorage.getItem("playerId");

if (!playerId) {

  const newId =
    crypto.randomUUID();

  localStorage.setItem(
    "playerId",
    newId
  );

}
