<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Model\Modules;

class ModulesController extends CmsController
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $modules = Modules::orderBy("modules_id", "DESC");

        if($request->input('title'))
        {
           $modules->where('title', 'like', '%'.$request->input('title').'%');
        }

        if($request->input('status'))
        {
           $modules->where('status', $request->input('status'));
        }

        return view("cms/pages/modules/index", array(
            "modules" => $modules->paginate(50)
        ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("cms/pages/modules/show");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->input(), [
            'title'   => 'required',            
            'status' => 'required'


        ]);

        $niceNames = array(
            'title'   => 'nome',         
            'status' => 'status'
        );

        $validator->setAttributeNames($niceNames); 

        if($validator->fails()) {
            return redirect(route('cms-modules-create'))->withErrors($validator->messages())->withInput();        
        } 

        try {
            $modules = Modules::create($request->all());
            return redirect(route('cms-modules-show', $modules->modules_id)); 
        } catch (Exception $e) {
            $request->session()->flash('alert', array('code'=> 'error', 'text'  => $e));
            return redirect(route('cms-modules')); 
        }        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $modules = Modules::find($id);

        if (empty($modules)) {
            abort(404);
        }

        return view("cms/pages/modules/show", array(
            "modules" => $modules
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->input(), [
            'title'   => 'required',         
            'status' => 'required'

        ]);

        $niceNames = array(
            'title'   => 'nome',       
            'status' => 'status'
        );

        $validator->setAttributeNames($niceNames); 

        if($validator->fails()) {
            return redirect(route('cms-modules-show', $id))->withErrors($validator->messages())->withInput();        
        } 

        try {
           
            Modules::find($id)->update($request->except(["image", "banner"]));
            $request->session()->flash('alert', array('code'=> 'success', 'text'  => 'Operação realizada com sucesso!'));
        } catch (Exception $e) {
            $request->session()->flash('alert', array('code'=> 'error', 'text'  => $e));
        }
       
        return redirect(route('cms-modules'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        try {
            $modules = Modules::find($id);

            if(empty($modules)) {
                abort(404);
            }

            $modules->delete();
            $request->session()->flash('alert', array('code'=> 'success', 'text'  => 'Operação realizada com sucesso!'));
        } catch (Exception $e) {
            $request->session()->flash('alert', array('code'=> 'error', 'text'  => $e));
        }
       
        return redirect(route('cms-modules'));
    }
}
