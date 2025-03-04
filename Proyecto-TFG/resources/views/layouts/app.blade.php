<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Mi Tienda en Laravel 12')</title>

    @vite(['resources/scss/app.scss', 'resources/js/app.js'])
</head>
<body>
    <div id="app">
        @include('partials.navbar')

        <div class="container mt-4">
            @yield('content')
        </div>

        @include('partials.footer')
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