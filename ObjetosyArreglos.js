/* --------------------- Objeto representacional de un usuario en RRSS --------------------- */
const Profile = {
    id: "254523687364",
    Tagname: 'Juan Perez',
    profileImg: "http://www.resources.com/res/img/254523687364",
    age: 25,
    description: "Usuario regular en redes sociales",
    email: 'perezjose@gmail.com',
    phone: '123456789',
    address: {
        street: 'Calle 123',
        city: 'Ciudad de Mexico',
        state: 'CDMX',
        country: 'Mexico'
    },
    // Metodo para el objeto
    getFullAddress: function(){
        return `${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.country}`
    }
}

// Acceder a una clave del objeto
let Tagname = Profile.Tagname // Acceder al atributo 'Tagname' del objeto Profile
console.log(Tagname)

// Agregar una nueva clave al objeto
Profile.gender = 'male' // Agregar el atributo 'gender' al objeto Profile
console.log(Profile)

// Eliminar una clave del objeto
delete Profile.profileImg // Elimina la imagen de perfil del objeto
console.log(Profile)


/* --------------------- Arreglo de nombres de usuarios --------------------- */
const Usernames = ['Juan', 'Pedro', 'Maria', 'Ana', 'Jose']

// Acceder a un elemento del arreglo
let Username = Usernames[0] // Acceder al primer elemento del arreglo
console.log(Username) // Salida: Juan

// Agregar un nuevo elemento al arreglo
Usernames.push('Carlos') // Agregar un nuevo elemento al final del arreglo
console.log(Usernames) // Salida: ['Juan', 'Pedro', 'Maria', 'Ana', 'Jose', 'Carlos']

Usernames.unshift('Luis') // Agregar un nuevo elemento al principio de un arreglo
console.log(Usernames) // Salida: ['Luis', 'Juan', 'Pedro', 'Maria', 'Ana', 'Jose', 'Carlos']

// Eliminar un elemento del arreglo
Usernames.pop() // Eliminar el ultimo elemento del arreglo
console.log(Usernames) // Salida: ['Juan', 'Pedro', 'Maria', 'Ana', 'Jose']

Usernames.shift() // Eliminar el primer elemento del arreglo
console.log(Usernames) // Salida: ['Pedro', 'Maria', 'Ana', 'Jose']

// Obtener el indice de un elementod del arreglo, el conteo empieza desde 0
let index = Usernames.indexOf('Maria') // Obtener el indice del elemento 'Maria'
console.log(index) // Salida: 1

// Eliminar un elemento del arreglo por su indice
Usernames.splice(index, 1) // Eliminar el elemento 'Maria' del arreglo
console.log(Usernames) // Salida: ['Pedro', 'Ana', 'Jose']