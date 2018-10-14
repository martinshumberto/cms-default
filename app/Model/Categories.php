<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table      = "categories";
	protected $primaryKey = 'categories_id';
	protected $fillable   = ['modules_id','title', 'subtitle', 'insert_users_id', 'update_users_id',  'status', 'states_id', 'cd_ibge', 'created_at', 'updated_at'];

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

	public function module()
    {
        return $this->hasOne('App\Model\Modules', 'modules_id', 'modules_id');
    }

    
	public function user_insert()
    {
        return $this->hasOne('App\Model\Users', 'insert_users_id', 'users_id');
    }

	public function user_update()
    {
        return $this->hasOne('App\Model\Users', 'update_users_id', 'users_id');
    }

    public function contents()
    {
        return $this->hasMany('App\Model\Contents', 'categories_id', 'categories_id');
    }


}
