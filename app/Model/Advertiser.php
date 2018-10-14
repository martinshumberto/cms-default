<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Advertiser extends Model
{
    protected $table      = "advertiser";
	protected $primaryKey = 'advertiser_id';
	protected $fillable   = ['logo','title','phone', 'email', 'cnpj', 'priority', 'status','created_at', 'updated_at'];

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
        return $this->belongsToMany('App\Model\Adverts', 'advertiser_id', 'advertiser_id');
    }


}
