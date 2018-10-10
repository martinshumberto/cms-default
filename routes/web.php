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

Route::get('/', function () {
    return view('welcome');
});

/* SITE */
Route::group(['namespace' => 'Site'], function() { 
	Route::get('/', array('as' => 'site-home', 'uses' => 'HomeController@index'));
});


/* CMS */
Route::group(['namespace' => 'Cms', 'prefix' => 'cms'], function() {
	Route::get('auth', array('as'        => 'cms-auth', 'uses' => 'LoginController@index', 'nickname' => "Login do CMS"));	
	Route::get('/', array('as'        => 'cms-dashboard', 'uses' => 'DashboardController@index', 'nickname' => "Dashboard do CMS"));	
});

