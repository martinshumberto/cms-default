<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Locations extends Model
{
    protected $table      = "locations";
	protected $primaryKey = 'locations_id';
	protected $fillable   = ['title','size', 'status', 'created_at', 'updated_at'];

	public function status() {
		
		switch ($this->status) {
			case '1':
				return "Ativo";
			break;
			case '2':
				return "Inativo";
			break;
		}
	}

	public function adverts()
    {
        return $this->hasMany('App\Model\Adverts', 'locations_id', 'locations_id');
    }


}
