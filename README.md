# TestShoppingCart
El presente repositorio consta de 2 carpetas principales, en API podremos ver la solución en C# con .Net 8, corresponde a un API rest que retorna los datos de los productos en un json y un método para almacenar la compra en un archivo de logs.

API 
En lo que corresponde a este proyecto solo tomar en cuenta la ruta de configuración para los logs en el archivo de configuración appsettings.json, debe ser una ruta accesible desde donde se ejecuta el proyecto, por defecto la configuración es: "path": "C:\\Logs\\log-.txt" 

Web 
Es un proyecto de React con vite, para lo cual antes de nada se debe realizar el respectivo npm install y posteriormente npm run dev para ejecutar el proyecto en modo de desarrollo
