const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

 elixir((mix) => {

 	/* SCSS App */
 	mix.sass('app.scss')
 	.webpack('app.js');

 	/* SCSS Cms */
 	mix.sass('resources/assets/sass/cms/style.scss', 'public/css/cms/style.css');

 	/* JS Cms */
 	mix.scripts([
 		'resources/assets/js/cms/libs/jquery/dist/jquery.min.js',
 		'resources/assets/js/cms/libs/popper.js/dist/umd/popper.min.js',
 		'resources/assets/js/cms/libs/bootstrap/bootstrap.min.js',
 		'resources/assets/js/cms/libs/PACE/pace.min.js',
 		'resources/assets/js/cms/libs/chart.js/dist/Chart.min.js',
 		'resources/assets/js/cms/libs/nicescroll/jquery.nicescroll.min.js',
 		'resources/assets/js/cms/libs/jquery-loading/dist/jquery.loading.min.js',
 		], 'public/js/cms/app-libs.js'); 


 	/* JS Cms */
 	mix.scripts([
 		'resources/assets/js/cms/app.js',
 		], 'public/js/cms/app.js'); 


 	/* 
	Archives ~
	*/

	mix.copy('resources/assets/fonts', 'public/fonts');
	mix.copy('resources/assets/img', 'public/img');


});
