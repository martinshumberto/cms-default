<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Cities extends Model
{
    protected $table      = "cities";
	protected $primaryKey = 'cities_id';
	protected $fillable   = ['name', 'status', 'states_id', 'cd_ibge', 'created_at', 'updated_at'];

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

	public function state()
    {
        return $this->hasOne('App\Model\States', 'states_id', 'states_id');
    }

}
