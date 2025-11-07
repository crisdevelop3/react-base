import React, { useEffect, useState } from "react";

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
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []); // [] para que se ejecute una sola vez

  /* 
  Antes de que lleguen los datos, el componente muestra un texto que indica que está cargando.
  Cuando loading cambia a false, React vuelve a renderizar y muestra la lista.
  */
  if (loading) {
    return <h2>Cargando datos...</h2>;
  }

  // se limita a mostrar 10 posts y lo recorre con map
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Lista de Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.slice(0, 10).map(post => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
