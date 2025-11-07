export async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Error al obtener los posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getPosts:", error);
    throw error;
  }
}