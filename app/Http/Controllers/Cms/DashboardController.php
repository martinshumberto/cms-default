<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class DashboardController extends Controller
{
	use AuthenticatesUsers;

	public function index()
	{	
		$users = Auth::user();
		return view("cms/pages/dashboard/index", array(
			"users" => $users,
		));
	}
}
