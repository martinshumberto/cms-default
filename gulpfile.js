const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
require('gulp');


elixir((mix) => {

	/* SCSS App */
	mix.sass('app.scss')
	.webpack('app.js');



	/*------------------------------------------------------------------------*/
	/* SITE */
	/*------------------------------------------------------------------------*/

	/* SCSS Site */
	mix.sass('resources/assets/sass/site/pages/home.scss', 'public/css/site/site-home.css');

	/* JS Libs Site */
	mix.scripts([
		'resources/assets/js/site/libs/jquery-ui.js',
		], 'public/js/site/site-home-libs.js'); 

	/* JS Site */
	mix.scripts([
		'resources/assets/js/site/modules/home.js',
		], 'public/js/site/site-home.js'); 




	/*------------------------------------------------------------------------*/
	/* CMS */
	/*------------------------------------------------------------------------*/

	/* SCSS Cms */
	mix.sass('resources/assets/sass/cms/style.scss', 'public/css/cms/style.css');
	//mix.sass(['resources/assets/sass/cms/pages/home.scss'], 'public/css/cms/cms-dashboard.css');


	/* JS Libs Cms */
	 mix.scripts([
	 	'resources/assets/js/libs/jquery/dist/jquery.min.js',
	 	'resources/assets/js/libs/popper.js/dist/umd/popper.min.js',
	 	'resources/assets/js/libs/bootstrap/dist/js/bootstrap.min.js',
	 	'resources/assets/js/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js',
	 	'resources/assets/js/libs/sparkline/sparkline.js',
	 	], 'public/js/cms/app-libs.js'); 

	 mix.scripts([
	 	'resources/assets/js/cms/dist/app.min.js',
	 	'resources/assets/js/cms/dist/app.init.js',
	 	'resources/assets/js/cms/dist/app-style-switcher.js',
	 	'resources/assets/js/cms/dist/waves.js',
	 	'resources/assets/js/cms/dist/sidebarmenu.js',
	 	'resources/assets/js/cms/dist/custom.min.js',
	 	'resources/assets/js/cms/dist/dropdown-bootstrap-extended.js',
	 	], 'public/js/cms/app.js'); 




	// ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~
	// # JS PAGES
	// ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~

	// mix.scripts([
	// 	'resources/assets/js/cms/libs/owl.carousel/dist/owl.carousel.min.js',
	// 	], 'public/js/cms/cms-dashboard-libs.js'); 


	// // ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~

	// mix.scripts([
	// 	'resources/assets/js/cms/charts-morris-chart-example.js',
	// 	], 'public/js/cms/cms-dashboard.js'); 







	/*------------------------------------------------------------------------*/
	/* ERRORS */
	/*------------------------------------------------------------------------*/

	mix.sass('resources/assets/sass/cms/style.scss', 'public/css/core/style.css');
	mix.sass('resources/assets/sass/errors/core.scss', 'public/css/core/core.css');

	/* JS Libs Errors */
	mix.scripts([
		'resources/assets/js/cms/libs/jquery/dist/jquery.min.js',
		], 'public/js/core/app-libs.js'); 





	/*------------------------------------------------------------------------*/
	/* FILES */
	/*------------------------------------------------------------------------*/

	mix.copy('resources/assets/fonts', 'public/fonts');
	mix.copy('resources/assets/img', 'public/img');


});
