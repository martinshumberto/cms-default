const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');


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
		'resources/assets/js/site/libs/form-scripts.js',
		'resources/assets/js/site/libs/validator.min.js',
		'resources/assets/js/site/libs/jquery.mask.js',
		], 'public/js/site/site-home-libs.js'); 

	/* JS Site */
	mix.scripts([
		'resources/assets/js/site/modules/home.js',
		], 'public/js/site/site-home.js'); 





	/*------------------------------------------------------------------------*/
	/* cms */
	/*------------------------------------------------------------------------*/

	/* SCSS Cms */
	mix.sass('resources/assets/sass/cms/style.scss', 'public/css/cms/style.css');
	mix.sass(['resources/assets/sass/cms/pages/home.scss'], 'public/css/cms/cms-dashboard.css');
	

	/* JS Libs Cms */
	mix.scripts([
		'resources/assets/js/cms/libs/jquery/dist/jquery.min.js',
		'resources/assets/js/cms/libs/popper.js/dist/umd/popper.min.js',
		'resources/assets/js/cms/libs/bootstrap/bootstrap.min.js',
		'resources/assets/js/cms/libs/PACE/pace.min.js',
		'resources/assets/js/cms/libs/chart.js/dist/Chart.min.js',
		'resources/assets/js/cms/libs/nicescroll/jquery.nicescroll.min.js',
		'resources/assets/js/cms/libs/jquery-loading/dist/jquery.loading.min.js',
		], 'public/js/cms/app-libs.js'); 

	// ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~

	mix.scripts([
		'resources/assets/js/cms/libs/raphael/raphael.min.js',
		'resources/assets/js/cms/libs/charts-morris-chart/morris.min.js',
		], 'public/js/cms/cms-dashboard-libs.js'); 


	// ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~

	mix.scripts([
		'resources/assets/js/cms/charts-morris-chart-example.js',
		], 'public/js/cms/cms-dashboard.js'); 




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
