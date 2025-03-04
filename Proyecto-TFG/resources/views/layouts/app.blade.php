<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mi Proyecto Laravel 11</title>
    @vite(['resources/scss/app.scss', 'resources/js/app.js'])
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
</body>
</html>
{{-- 
    Ejemplo de uso de la directiva vite en un archivo blade
    La directiva vite se encarga de cargar los archivos css y js que se encuentran en la carpeta resources
    en el archivo app.blade.php
    La directiva vite recibe un array con los archivos que se quieren cargar
    En este caso se cargan los archivos app.scss y app.js
--}}