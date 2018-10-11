<?php

namespace App\Model;

use Artesaos\Defender\Traits\HasDefender;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Definitions extends Authenticatable 
{
	use HasDefender;

    protected $table      = 'definitions';
	protected $primaryKey = 'definitions_id';
	protected $fillable   = 
    ['key', 'user_cpanel', 'password_cpanel','register_for_page', 'photos_for_page', 'folder_files', 'timezone','ext_photos','ext_files','adverts','polls','newsletter','status_site'];


    public function status()
    {   
        switch ($this->status_site) {
            case '1':
                return 'Online';
            break;
            case '2':
                return 'Manutenção';
            break;
        }
    }
}
