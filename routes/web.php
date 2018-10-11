<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* SITE */
Route::group(['namespace' => 'Site'], function() { 
	Route::get('/', array('as' => 'site-home', 'uses' => 'HomeController@index'));
});


/* CMS */
Route::group(['namespace' => 'Cms', 'prefix' => 'cms'], function() {
	/* Login */
	Route::get('auth', array('as'        => 'cms-auth', 'uses' => 'LoginController@index', 'nickname' => "Login do CMS"));	
	Route::post('auth', array('as'       => 'cms-auth', 'uses' => 'LoginController@authenticate', 'nickname' => "Login do CMS"));
	Route::get('logout', array('as' => 'cms-auth-logout', 'uses' => 'LoginController@logout', 'nickname' => "Logout do CMS"));
	Route::get('auth/forgot-password', array('as' => 'cms-auth-forgot', 'uses' => 'LoginController@logout', 'nickname' => "Logout do CMS"));

	/* Acesso */
	Route::group(['middleware' => 'auth:cms'], function() {
		Route::get('/', array('as' => 'cms-dashboard', 'uses' => 'DashboardController@index', 'nickname' => "Dashboard do CMS"));	

		/* Páginas */
		Route::get('/configuracoes/sistema', array('as' => 'cms-settings-system', 'uses' => 'SettingsController@system', 'nickname' => "Configurações do CMS"));	
		Route::post('/configuracoes/sistema', array('as' => 'cms-settings-system-update', 'uses' => 'SettingsController@systemUpdate', 'nickname' => "Configurações do CMS"));	

		Route::get('/configuracoes/site', array('as' => 'cms-settings-site', 'uses' => 'SettingsController@site', 'nickname' => "Configurações do Site"));	
		Route::post('/configuracoes/site', array('as' => 'cms-settings-site-update', 'uses' => 'SettingsController@siteUpdate', 'nickname' => "Configurações do Site"));	


		Route::get('modulos', array('as'                              => 'cms-modules', 'uses' => 'ModulesController@index', 'nickname' => "Listar Modulos"));
		Route::get('modulos/novo', array('as'                         => 'cms-modules-create', 'uses' => 'ModulesController@create', 'nickname' => "Criar Modulos"));
		Route::post('modulos/novo', array('as'                        => 'cms-modules-create', 'uses' => 'ModulesController@store', 'nickname' => "Criar Modulos"));
		Route::get('modulos/{id}', array('as'                         => 'cms-modules-show', 'uses' => 'ModulesController@show', 'nickname' => "Visualizar Modulos"));
		Route::put('modulos/{id}', array('as'                         => 'cms-modules-update', 'uses' => 'ModulesController@update', 'nickname' => "Atualizar Modulos"));
		Route::get('modulos/excluir/{id}', array('as'                 => 'cms-modules-delete', 'uses' => 'ModulesController@destroy', 'nickname' => "Excluir Modulos"));
		Route::get('modulos/status/{!id}/{!action}', array('as'         => 'cms-modules-status', 'uses' => 'ModulesController@status', 'nickname' => "Status de Modulos"));
	});
});


