<h2>
  <i>
    Fundamentos de Objetos en JS (Acceder a claves, agregar y eliminar propiedades)
  </i>
</h2>
Para ejemplificar este tema, usaremos el siguiente objeto:
<div align="center">
  <img 
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/6329e498-66d7-4771-8d37-be5098c8108d" 
    alt="Fig. Objeto para representar el perfil de una persona en RRSS" 
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Objeto para representar el perfil de una persona en RRSS
  </i>
</div>
<ul>
  <li>
    Acceso a claves de un objeto:
  </li>
</ul>
Para acceder a las claves del objeto se usa <code>Objeto.nombreClave</code>, como se muestra a continuación:
<div align="center">
  <img 
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/413b9186-9ccc-4410-98f5-6c346ca5a802" 
    alt="Fig.Acceder a una propiedad del objeto “Profile”" 
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig.Acceder a una propiedad del objeto “Profile”
  </i>
</div>
<ul>
  <li>
    Agregar una propiedad a un objeto:
  </li>
</ul>
Para agregar propiedades de un objeto usamos <code>Objeto.nuevaPropiedad = valor</code> Para agregar la nueva propiedad
<div align="center">
  <img 
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/685f8c7a-99e0-42b1-9c23-95a823b54eab" 
    alt="Fig. Agregar la propiedad “gender” al objeto “Profile”" 
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Agregar la propiedad “gender” al objeto “Profile”
  </i>
</div>
<ul>
  <li>
    Eliminar una propiedad de un objeto:
  </li>
</ul>
Para eliminar propiedades de un objeto usamos <code>del Objeto.nombrePropiedad</code> para eliminarla:
<div align="center">
  <img 
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/ea9c5244-6cd3-4f5f-b089-7f66c0b57cc0" 
    alt="Fig. Eliminar la propiedad “profileImg” del objeto “Profile”" 
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Eliminar la propiedad “profileImg” del objeto “Profile”
  </i>
</div>
<ul>
  <li>
    Uso del this en objetos
  </li>
</ul>
Para este caso tomaremos como ejemplo el metodo <code>getFullAddress()</code> del objeto Profile:
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/09f02bfa-19d9-435f-8f38-24eaa8a5544b"
    alt="Fig. Metodo para obtener la direccion completa de un usuario"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Metodo para obtener la direccion completa de un usuario
  </i>
</div>
Este metodo hace uso de la palabra this para hacer referencia a su propia instancia cuando se requiera acceder al metodo, <br>
esto facilita el poder acceder unicamente a su valor en lugar de cualquier otro definido con el mismo nombr
<hr>
<h2>
  <i>
    Arreglos en JS
  </i>
</h2>
<ul>
  <li>
    Metodos de arreglos
  </li>
</ul>
Para este caso usaremos el siguiente arreglo:
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/b56d6aad-fe75-4f51-9b71-50c76d41aa7b"
    alt="Fig. Arreglo de nombres de usuarios en JavaScript"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Arreglo de nombres de usuarios en JavaScript
  </i>
</div>
En JavaScript se tiene varios métodos para obtener valores, eliminarlos, modificarlos, etc., como:
<ul>
  <li>
    <strong>Array[index]:</strong> Permite acceder a un elemento por su índice en un arreglo
  </li>
</ul>
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/a4339eb5-dbca-48ed-93b4-390b7760840f"
    alt="Fig. Acceder a un elemento del arreglo"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Acceder a un elemento del arreglo
  </i>
</div>
<ul>
  <li>
    <strong>Push:</strong> Este metodo permite añadir un elemento al final de un arreglo y retorna la nueva longitud del arreglo.
  </li>
</ul>
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/aee334c4-8e7a-42b1-83fe-8401892b6057"
    alt="Fig. Uso del metodo push para agregar un elemento al final del arreglo “Usernames”"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Uso del metodo push para agregar un elemento al final del arreglo “Usernames”
  </i>
</div>
<ul>
  <li>
    <strong>Unshift:</strong> Este metodo permite añadir un elemento al inicio de un arreglo y retorna la nueva longitud del arreglo.
  </li>
</ul>
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/0829fb64-b302-466d-bd47-994c3889f86f"
    alt="Fig. Uso de shift ppara añadir un nuevo nombre de usuario al comienzo del arreglo “Usernames”"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Uso de shift ppara añadir un nuevo nombre de usuario al comienzo del arreglo “Usernames”
  </i>
</div>
<ul>
  <li>
    <strong>Pop:</strong> Este metodo elimina un elemento del final de un arreglo y retorna el elemento eliminado.
  </li>
</ul>
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/ac857d50-df77-4a7c-8dd8-9ed3f4953f3c"
    alt="Fig. Uso de pop para eliminar el ultimo nombre de usuario"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Uso de pop para eliminar el ultimo nombre de usuario
  </i>
</div>
<ul>
  <li>
    <strong>Shift:</strong> Este metodo permite eliminar el primer elemento de un arreglo y retorna el elemento eliminado.
  </li>
</ul>
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/bec3ce4b-44c7-4c4c-a0ca-6835033cfc88"
    alt="Fig. Uso de shift para eliminar el primer elemento del arreglo “Usernames”"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Uso de shift para eliminar el primer elemento del arreglo “Usernames”
  </i>
</div>
<ul>
  <li>
    <strong>indexOf:</strong> Este metodo nos permite obtener el indice de un elemento en el arreglo, retorna un entero que representa la <br>
    posicion del elemento en el arreglo.
  </li>
</ul>
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/d5631597-d61f-4b4c-91cf-06974311cb48"
    alt="Fig. Uso de indexOf para obtener la posición de “María” en el arreglo “Usernames”"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Uso de indexOf para obtener la posición de “María” en el arreglo “Usernames”
  </i>
</div>
<ul>
  <li>
    <strong>Splice:</strong> Este método nos permite modificar elementos de un arreglo,<br> 
    ya sea eliminándolos o agregándolos según se necesite, retornara un arreglo de los elementos que fueron modificados.
  </li>
</ul>
<div align="center">
  <img
    src="https://github.com/Alejo-P/Objetos-Arreglos-JS/assets/150528715/7c49e009-4ceb-49fd-b894-bb2669b05929"
    alt="Fig. Uso de splice para eliminar el elemento “Maria” según si indice del arreglo “Usernames”"
    style="display: block; margin-left: auto; margin-right: auto; width: 50%;"
  />
  <br>
  <i>
    Fig. Uso de splice para eliminar el elemento “Maria” según si indice del arreglo “Usernames”
  </i>
</div>
