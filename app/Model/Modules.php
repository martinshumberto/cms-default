<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Modules extends Model
{
    protected $table      = "modules";
	protected $primaryKey = 'modules_id';
	protected $fillable   = 
	['module', 'title', 'subtitle',  'featured', 'category', 'featured_image', 'summary', 'content', 'credit_author', 'tags', 'initial_date', 'end_date' ,'starting_time', 'end_time',
	'publication_date', 'amount_1', 'amount_2', 'amount_3', 'check_1', 'check_2', 'check_3', 'external_link', 'optimization_seo', 'image_gallery', 'video_gallery', 'file_gallery',
	'notifications', 'insert_users_id', 'update_users_id','status', 'created_at', 'updated_at'];

	public function status() {
		
		switch ($this->status) {
			case '1':
				return '<a href="http://poconet.com.br/painel/modules/action/status/1/disabled/"><i style="color: green;" class="fa fa-check"></i></a>';
			break;
			case '2':
				return "Inativo";
			break;
		}
	}

	public function status()
	{

	}

	public function user_insert()
    {
        return $this->hasOne('App\Model\Users', 'insert_users_id', 'users_id');
    }

	public function user_update()
    {
        return $this->hasOne('App\Model\Users', 'update_users_id', 'users_id');
    }

}
