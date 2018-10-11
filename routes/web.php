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



		
		Route::get('/configuracoes/sistema', array('as' => 'cms-settings-system', 'uses' => 'SettingsController@system', 'nickname' => "Dashboard do CMS"));	
	});
});


