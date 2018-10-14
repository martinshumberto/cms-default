<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Adverts extends Model
{
    protected $table      = "adverts";
	protected $primaryKey = 'Adverts_id';
	protected $fillable   = ['advertiser_id','locations_id','type', 'title', 'price', 'start_date', 'end_date','code','file','url', 'status', 'states_id','created_at', 'updated_at'];

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

	public function advertiser()
    {
        return $this->hasOne('App\Model\Advertiser', 'advertiser_id', 'advertiser_id');
    }

	public function location()
    {
        return $this->hasOne('App\Model\Locations', 'locations_id', 'locations_id');
    }


}
