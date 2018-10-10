<?php

namespace App\Model;

use Artesaos\Defender\Traits\HasDefender;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Users extends Authenticatable 
{
	use HasDefender;

    protected $table      = "users";
	protected $primaryKey = 'users_id';
	protected $fillable   = 
    ['type', 'first_name', 'last_name','birth', 'email', 'login', 'password','user_insert','date_insert','user_update','date_update','last_acess','photo', 'status', 'remember_token', 'created_at', 'updated_at'];

	protected $hidden = [
        'password', 'remember_token',
    ];
    
	public function setPasswordAttribute($password)
    {   
        $this->attributes['password'] = bcrypt($password);
    }

    public function status()
    {   
        switch ($this->status) {
            case '1':
                return 'Ativo';
            break;
            case '2':
                return 'Inativo';
            break;
        }
    }
}
