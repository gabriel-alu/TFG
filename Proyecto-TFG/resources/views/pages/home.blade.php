@extends('layouts.app')

@section('title', 'Inicio')

@section('content')
    <div class="jumbotron text-center">
        <h1>Bienvenido a Mi Tienda</h1>
        <p>Encuentra los mejores productos Jumillanos al mejor precio</p>
        <a href="{{ route('products') }}" class="btn btn-primary">Ver Productos</a>
    </div>
@endsection
