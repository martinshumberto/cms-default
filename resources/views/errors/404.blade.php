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

	<!-- Start loading the favicon-->
	<link rel="shortcut icon" href="{{asset('public')}}/favicon.png" type="image/png">

	<!-- App Css -->
	<link id="pageStyle" rel="stylesheet" href="{{asset('public')}}/css/app.css">

	<!-- Style Css -->
	<link id="pageStyle" rel="stylesheet" href="{{asset('public')}}/css/core/style.css">
	<link id="pageStyle" rel="stylesheet" href="{{asset('public')}}/css/core/errors.css">


</head>

<body>




	<script src="{{asset('public')}}/js/core/app-libs.css"></script>   
	<script src="{{asset('public')}}/js/core/app.css"></script>   




</body>

</html>