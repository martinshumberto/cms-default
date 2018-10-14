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

	<section class="container-server-errors">

		<div class="brand-logo-dark float-left ">
			<a class="" href="#">
				<Strong>Consilio</Strong>
			</a>
		</div>

		<div class="server-errors pages-card">
			<div class="status-text-1">Oops!</div>
			<div class="status-error text-theme hertbit">4 0 4</div>
			<div class="text-center status-text-2 text-dark">404 PÁGINA NÃO ENCONTRADA</div>
			<div class="small text-center text-dark"> A página ou recurso que tentou utilizar, não foi encontrado. </div>
			<div class="text-center">
				<a href="{!!url("/")!!}" class="btn  btn-theme login-btn text-white"> Acessar Página Inicial </a>
			</div>

			<div class="text-center">
				<small>
					{!!date('Y')!!}  404 Página Não Encontrada - Todos os direitos reservados
				</small>
			</div>
		</div>
		<!-- end server-error pages -->
	</section>
	<!-- end secton container -->

	<div class="half-circle"></div>
	<div class="small-circle"></div>
	<div class="half-circle-bottom"></div>
	<div class="small-circle-bottom"></div>

	<div id="copyright">
		<a href="//consilio.com.br" target="_blank" class="text-theme">Consilio</a> &copy; </div>


		<!-- Libs -->
		<script src="{{asset('public')}}/js/core/app-libs.css"></script>   
		<!-- App --> 
		<script src="{{asset('public')}}/js/core/app.css"></script>   




	</body>

	</html>