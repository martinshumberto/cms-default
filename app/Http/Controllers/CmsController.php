<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use View;
use Auth;

# Global Definitions
use App\Model\Definitions;

class CmsController extends Controller
{
	public function __construct(Request $request)
	{
		$defintions = Definitions::first();

		View::share(array(
			"defintions"   => $defintions,
		));
	} 
}



