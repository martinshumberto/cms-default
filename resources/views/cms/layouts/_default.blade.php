<!DOCTYPE html>
<html lang="pt-BR" itemscope itemtype="http://schema.org/WebPage">
<head>
    <!--  Start meta tags -->    
    <title>{{Config::get('app.appTitle')}}</title>
    <meta name="csrf-token" content="{!!csrf_token()!!}"/>

    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
    <base href="{{url("/")}}">
    <link rel="canonical" href="{{url()->current()}}" />
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="keywords" content="{{Config::get('app.appKeywords')}}"/>
    <meta name="description" content="{{Config::get('app.appDescription')}}">
    <meta name="robots" content="index,follow,noodp"/>
    <meta name="language" content="portuguese"/>


    <!-- Open Graph data -->
    <meta property="og:locale" content="pt_BR"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="{{Config::get('app.appTitle')}}"/>
    <meta property="og:url" content="{{url()->current()}}"/>
    <meta property="og:image" content="{{Config::get('app.appImage')}}"/>
    <meta property="og:description" content="{{Config::get('app.appDescription')}}"/>
    <meta property="og:site_name" content="{{url("/")}}"/>
    <!-- End meta tags -->

    <!-- Start loading the favicon-->
    <link rel="shortcut icon" href="{{asset('public')}}/favicon.png" type="image/png">

    <!-- App Css -->
    <link id="pageStyle" rel="stylesheet" href="{{asset('public')}}/css/app.css">

    <!-- Style Css -->
    <link id="pageStyle" rel="stylesheet" href="{{asset('public')}}/css/cms/style.css">

</head>

<body class="app sidebar-fixed aside-menu-off-canvas aside-menu-hidden header-fixed">
    @include('cms.layouts._header')
    <!-- end header -->

    <div class="app-body">

        @include('cms.layouts._sidebar')
        <!-- end sidebar -->

        <main class="main">
            @yield('content')
        </main>
        <!-- end main -->

        <!-- end aside -->

    </div>
    <!-- end app-body -->



    <footer class="app-footer">
        <a href="//consilio.com.br" target="_blank" class="text-theme">Consilio</a> &copy; {!!date('Y')!!} todos os direitos reservados.
    </footer>


    <!-- Libs -->
    <script src="{{asset('public'.elixir('js/cms/app-libs.js'))}}"></script> 
    <!-- App -->
    <script src="{{asset('public'.elixir('js/cms/app.js'))}}"></script> 

</body>

</html>