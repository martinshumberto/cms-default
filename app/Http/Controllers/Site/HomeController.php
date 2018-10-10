<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\SiteController;

use Illuminate\Http\Request;

use App\Http\Requests;

class HomeController extends SiteController
{
   public function index()
   {	
   		return view("site/pages/home/index");
   }
}
