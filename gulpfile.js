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
	/* ERRORS */
	/*------------------------------------------------------------------------*/

	mix.sass('resources/assets/sass/cms/style.scss', 'public/css/core/style.css');
	mix.sass('resources/assets/sass/errors/core.scss', 'public/css/core/core.css');

	/* JS Libs Errors */
	mix.scripts([
		'resources/assets/js/cms/libs/jquery/dist/jquery.min.js',
		'resources/assets/js/cms/libs/popper.js/dist/umd/popper.min.js',
		'resources/assets/js/cms/libs/bootstrap/bootstrap.min.js',
		'resources/assets/js/cms/libs/PACE/pace.min.js',
		'resources/assets/js/cms/libs/chart.js/dist/Chart.min.js',
		'resources/assets/js/cms/libs/nicescroll/jquery.nicescroll.min.js',
		'resources/assets/js/cms/libs/jquery-loading/dist/jquery.loading.min.js',
		], 'public/js/core/app-libs.js'); 


	/*------------------------------------------------------------------------*/
	/* cms */
	/*------------------------------------------------------------------------*/

	/* SCSS Cms */
	mix.sass('resources/assets/sass/cms/style.scss', 'public/css/cms/style.css');
	mix.sass(['resources/assets/sass/cms/pages/home.scss'], 'public/css/cms/cms-dashboard.css');
	mix.sass(['resources/assets/sass/cms/pages/settings-system.scss'], 'public/css/cms/cms-settings-system.css');
	mix.sass(['resources/assets/sass/cms/pages/contents.scss'], 'public/css/cms/cms-contents-create.css');
	mix.sass(['resources/assets/sass/cms/pages/contents.scss'], 'public/css/cms/cms-contents-show.css');
	mix.sass(['resources/assets/sass/cms/pages/gallery.scss'], 'public/css/cms/cms-gallery.css');
	mix.sass(['resources/assets/sass/cms/pages/users.scss'], 'public/css/cms/cms-users-create.css');
	mix.sass(['resources/assets/sass/cms/pages/users.scss'], 'public/css/cms/cms-users-show.css');

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

	mix.scripts([
		'resources/assets/js/cms/libs/sliderrange/dist/jquery-asRange.min.js',
		'resources/assets/js/cms/libs/jquery-labelauty/source/jquery-labelauty.js',
		], 'public/js/cms/cms-settings-system-libs.js'); 

	mix.scripts([
		'resources/assets/js/site/libs/jquery.mask.js',
		'resources/assets/js/cms/libs/select2/dist/js/select2.min.js',
		'resources/assets/js/cms/libs/bootstrap-maxlength/src/bootstrap-maxlength.js',
		], 'public/js/cms/cms-settings-site-libs.js'); 

	mix.scripts([
		'resources/assets/js/cms/libs/select2/dist/js/select2.min.js',
		'resources/assets/js/cms/libs/editor-summernote/dist/summernote-lite.js',
		'resources/assets/js/cms/libs/bootstrap-tagsinput/dist/tagsinput.js',
		'resources/assets/js/cms/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
		'resources/assets/js/cms/libs/clockpicker/dist/bootstrap-clockpicker.min.js',
		'resources/assets/js/cms/bootstrap-form-validation.js',
		], 'public/js/cms/cms-contents-create-libs.js'); 

	mix.scripts([
		'resources/assets/js/cms/libs/select2/dist/js/select2.min.js',
		'resources/assets/js/cms/libs/editor-summernote/dist/summernote-lite.js',
		'resources/assets/js/cms/libs/bootstrap-tagsinput/dist/tagsinput.js',
		'resources/assets/js/cms/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
		'resources/assets/js/cms/libs/clockpicker/dist/bootstrap-clockpicker.min.js',
		'resources/assets/js/cms/bootstrap-form-validation.js',
		], 'public/js/cms/cms-contents-show-libs.js'); 

	mix.scripts([
		'resources/assets/js/cms/libs/select2/dist/js/select2.min.js',
		'resources/assets/js/cms/bootstrap-form-validation.js',
		], 'public/js/cms/cms-categories-create-libs.js'); 

	mix.scripts([
		'resources/assets/js/cms/libs/select2/dist/js/select2.min.js',
		'resources/assets/js/cms/bootstrap-form-validation.js',
		], 'public/js/cms/cms-categories-show-libs.js'); 

	mix.scripts([
		'resources/assets/js/cms/libs/jquery-strength/dist/password_strength.js',
		'resources/assets/js/cms/libs/select2/dist/js/select2.min.js',
		'resources/assets/js/cms/libs/jquery-strength/dist/jquery-strength.js',
		'resources/assets/js/cms/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
		], 'public/js/cms/cms-users-create-libs.js'); 

	mix.scripts([
		'resources/assets/js/cms/libs/jquery-strength/dist/password_strength.js',
		'resources/assets/js/cms/libs/select2/dist/js/select2.min.js',
		'resources/assets/js/cms/libs/jquery-strength/dist/jquery-strength.js',
		'resources/assets/js/cms/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
		], 'public/js/cms/cms-users-show-libs.js'); 




	/* JS Cms */
	mix.scripts([
		'resources/assets/js/cms/app.js',
		], 'public/js/cms/app.js'); 

	// ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~

	mix.scripts([
		'resources/assets/js/cms/charts-morris-chart-example.js',
		], 'public/js/cms/cms-dashboard.js'); 

	mix.scripts([
		'resources/assets/js/cms/modules/ranger.js',
		'resources/assets/js/cms/modules/labelauty.js',
		], 'public/js/cms/cms-settings-system.js'); 

	mix.scripts([
		'resources/assets/js/cms/modules/mask.js',
		'resources/assets/js/cms/modules/select2.js',
		'resources/assets/js/cms/modules/max.length.js',
		'resources/assets/js/cms/modules/states_cities.js',
		], 'public/js/cms/cms-settings-site.js'); 

	mix.scripts([
		'resources/assets/js/cms/modules/checkmodules.js',
		], 'public/js/cms/cms-modules-create.js'); 


	mix.scripts([
		'resources/assets/js/cms/modules/editemodule.js',
		], 'public/js/cms/cms-modules-show.js'); 


	mix.scripts([
		'resources/assets/js/cms/modules/select2.js',
		'resources/assets/js/cms/modules/summernote.js',
		'resources/assets/js/cms/modules/datepiker.js',
		'resources/assets/js/cms/modules/clockpicker.js',
		'resources/assets/js/cms/modules/file.preview.js',
		], 'public/js/cms/cms-contents-create.js'); 


	mix.scripts([
		'resources/assets/js/cms/modules/select2.js',
		'resources/assets/js/cms/modules/summernote.js',
		'resources/assets/js/cms/modules/datepiker.js',
		'resources/assets/js/cms/modules/clockpicker.js',
		'resources/assets/js/cms/modules/file.preview.js',
		], 'public/js/cms/cms-contents-show.js'); 


	mix.scripts([
		'resources/assets/js/cms/modules/select2.js',
		], 'public/js/cms/cms-categories-create.js'); 


	mix.scripts([
		'resources/assets/js/cms/modules/select2.js',
		], 'public/js/cms/cms-categories-show.js'); 

	mix.scripts([
		'resources/assets/js/cms/modules/select2.js',
		'resources/assets/js/cms/modules/strength.js',
		'resources/assets/js/cms/modules/datepiker.js',
		'resources/assets/js/cms/modules/file.preview.js',
		], 'public/js/cms/cms-users-create.js');

	mix.scripts([
		'resources/assets/js/cms/modules/select2.js',
		'resources/assets/js/cms/modules/strength.js',
		'resources/assets/js/cms/modules/datepiker.js',
		'resources/assets/js/cms/modules/file.preview.js',
		], 'public/js/cms/cms-users-show.js'); 




	/*------------------------------------------------------------------------*/
	/* FILES */
	/*------------------------------------------------------------------------*/

	mix.copy('resources/assets/fonts', 'public/fonts');
	mix.copy('resources/assets/img', 'public/img');


});
