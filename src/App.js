import React, { useEffect, useState } from "react";
import { getPosts } from "./api/posts";
import PostList from "./components/postList";

function App() {
  // useState es un hook de React que sirve para guardar y actualizar valores dentro de un componente funcional.
  // posts guarda los datos que llegan de la API
  // setPosts es la funcion que actualiza el valor
  const [posts, setPosts] = useState([]);      // Estado para los datos
  const [loading, setLoading] = useState(true); // Estado de carga
  // loading indica si los datos estan cargango

  // !! Cuando cambia estado con setPosts o setLoading, React vuelve a renderizar el componente automáticamente.


  // useEffect es otro hook que ejecuta codigo despues de que el componente se haya renderizado.
  useEffect(() => {
    // Llamada a la API
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // [] para que se ejecute una sola vez

  /* 
  Antes de que lleguen los datos, el componente muestra un texto que indica que está cargando.
  Cuando loading cambia a false, React vuelve a renderizar y muestra la lista.
  */
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Lista de Posts</h1>

      {loading ? <p>Cargando datos...</p> : <PostList posts={posts} />}
    </div>
  );
}

export default App;
