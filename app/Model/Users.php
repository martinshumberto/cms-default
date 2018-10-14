<?php

namespace App\Model;

use Artesaos\Defender\Traits\HasDefender;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Carbon\Carbon;


class Users extends Authenticatable 
{
	use HasDefender;

    protected $table      = "users";
	protected $primaryKey = 'users_id';
	protected $fillable   = 
    ['type', 'first_name', 'last_name','birth', 'email', 'login', 'password','last_acess','photo', 'status', 'remember_token', 'created_at', 'updated_at'];

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

    public function nivel()
    {   
        switch ($this->type) { 
            case '1':
                return 'Admin. do Sistema';
            break;
            case '2':
                return 'Admin. do Site';
            break;
            case '3':
                return 'Usuário do Site';
            break;
        }
    }


    public function getBirthAttribute($birth)
    {
        return Carbon::createFromFormat('Y-m-d', $birth)->format('d/m/Y');
    }

    public function setBirthAttribute($birth)
    {
        $this->attributes['birth'] = Carbon::createFromFormat('d/m/Y', $birth)->format('Y-m-d');
    }

}
