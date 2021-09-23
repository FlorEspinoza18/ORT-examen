const fs = require('fs');

/* Cuando se ingrese por consola el siguiente parámetro:

> node fs count

Debe mostrar en consola la cantidad total de archivos existentes en la carpeta files
 */

fs.readdir("./files", (err, files) => {
  console.log(files.length);
});



/* 
Cuando el comando ejecutado sea:

> node fs size

Deberá volcar en el archivo "summary.txt" una linea por cada archivo indicando el nombre y el peso del archivo en kb. */

fs.writeFile('summary.txt', nombreArchivo , (error) => {
  if(error){
      console.log(error);
  }
});

const nombreArchivo = fs.readdir('./files', (err, files) => {
  files.forEach(file => {
      console.log(file);
  })

});


/* Cuando el comando ejecutado sea:

> node fs length

Deberá volcar en el archivo "summary.txt" una linea por cada archivo indicando el
 nombre y la cantidad total de caracteres que contiene. Y al final una linea mas que indique 
 la cantidad total de caracteres que suman todos los valores anteriores.  */

 
let cantCaracteres =  fs.readdir('./files', (err, files) => {
  files.forEach(file => {
      console.log(file);
  })


let total = cantCaracteres.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(total)

});

 fs.appendFile('summary.txt', '\n ' + nombreArchivo + '\n ' + total , (error) => {
  if(!error){
      console.log('contenido agregado!');
  } else{
      console.log(error);
  }
})

/* Busqueda de texto

Cuando el comando ejecutado sea:

> node fs search "ipsum"

Deberá mostrar en pantalla los nombres de los archivos que contengan en cualquier parte del texto la palabra indicada en el ultimo parametro. */
