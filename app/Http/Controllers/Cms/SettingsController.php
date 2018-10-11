<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class SettingsController extends Controller
{
   use AuthenticatesUsers;

   public function system()
   {	
   		return view("cms/pages/settings/system");
   }
}
