<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <title>@yield('title', config('app.name'))</title>
    <style>
        html,
        body {
            height: 100%;
        }
    </style>
</head>

<body>
    <main id="app" style="height: inherit;">
        @yield('content')
    </main>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>