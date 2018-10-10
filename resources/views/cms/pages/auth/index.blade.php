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

<body>
	<section class="container-pages">

		<div class="brand-logo float-left"><a class="" href="#" style="color: black;"> Consilio CMS</a></div>

		<div class="pages-tag-line text-white" >  
			<div class="h4"  style="color: black;">Vamos começar!</div>
			<small  style="color: black;"> Painel de Administração mais poderoso do mundo</small>
		</div>

		<div class="card pages-card col-lg-4 col-md-6 col-sm-6">
			<div class="card-body ">
				<div class="h4 text-center text-theme"><strong>Acessar</strong></div>
				<div class="small text-center text-dark"> entre com sua conta </div>

				<form method="POST" action="{!!route('cms-auth')!!}" accept-charset="UTF-8" autocomplete="on">
					{{csrf_field()}}    	
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon text-theme"><i class="fa fa-user"></i> 
							</span>
							<input type="text" name="email" class="form-control" placeholder="E-mail">
						</div>
					</div>

					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon text-theme"><i class="fa fa-asterisk"></i></span>
							<input type="password" id="password" name="password" class="form-control" placeholder="Senha">

						</div>
					</div>
					<div class="form-group form-actions">
						<button type="submit" class="btn  btn-theme login-btn ">   Entrar   </button>
					</div>
					<div class="row form-group form-actions">
						<div  class="pull-left" style="float: unset; width: 100%; text-align: center;">
							<input type="checkbox" name="remember" id="remember" value="TRUE">	<label for="remember">Lembrar-me</label>
						</div>
					</div>
				</form>
				@if (Session::has('alert'))
				<style type="text/css">
					.alert-error{
						background: red;
						color: white;
					}
					.alert-success{
						background: green;
						color: white;
					}
				</style>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="alert alert-{!!session('alert.code')!!}" style="text-align: center;">
							{!! session('alert.text') !!}
						</div>
					</div>
				</div>
				@endif	

				<div class="text-center">
					<small>você esqueceu sua senha?
						<a href="{!!route('cms-auth-forgot')!!}" class="text-theme">clique aqui</a>
					</small>
				</div>

			</div>
			<!-- end card-body -->
		</div>
		<!-- end card -->
	</section>
	<!-- end section container -->
	<div class="half-circle"></div>
	<div class="small-circle"></div>


	<div id="copyright"  style="color: black;"><a  style="color: black;" href="//consilio.com.br" target="_blank" class="text-theme">Consilio</a> &copy; {!!date('Y')!!} todos os direitos reservados. </div>



	<!-- Libs -->
	<script src="{{asset('public'.elixir('js/cms/app-libs.js'))}}"></script> 
	<!-- App -->
	<script src="{{asset('public'.elixir('js/cms/app.js'))}}"></script> 

</body>

</html>