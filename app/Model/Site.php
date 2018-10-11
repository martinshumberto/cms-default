<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{

    protected $table      = 'site';
	protected $primaryKey = 'site_id';
	protected $fillable   = 
    ['title', 'description', 'keywords','email', 'password_email', 'phone', 'address','district','zip_code','states_id','cities_id','created_at','updated_at'];


}
