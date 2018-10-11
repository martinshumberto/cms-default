<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

# Models
use App\Model\Definitions;

class SettingsController extends Controller
{
	use AuthenticatesUsers;

	public function system()
	{	
		$users = Auth::user();
		$definitions = Definitions::first();

		return view("cms/pages/settings/system", array(
			"users" => $users,
			"definitions" => $definitions,
		));
	}

	public function systemUpdate(Request $request)
	{

		/* ~ Informações de Checkbox ~*/
		if($request->input('adverts') == "on"){
			$request->merge(array(
				'adverts' =>  '1'
			));
		}else{
			$request->merge(array(
				'adverts' =>  '2'
			));
		}

		if($request->input('polls') == "on"){
			$request->merge(array(
				'polls' =>  '1'
			));
		}else{
			$request->merge(array(
				'polls' =>  '2'
			));
		}

		if($request->input('newsletter') == "on"){
			$request->merge(array(
				'newsletter' =>  '1'
			));
		}else{
			$request->merge(array(
				'newsletter' =>  '2'
			));
		}

		try {

			Definitions::first()->update($request->all());
			$request->session()->flash('alert', array('code'=> 'success', 'text'  => 'Operação realizada com sucesso!'));
		} catch (Exception $e) {
			$request->session()->flash('alert', array('code'=> 'error', 'text'  => $e));
		}

		return redirect(route('cms-settings-system'));
	}
}
