export async function makeApiRequest() {
  try {
    const randomMath = Math.ceil(Math.random() * 151);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomMath}`
    );
    const jsonResponse = await response.json();
    if (response.ok) {
      return jsonResponse;
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
