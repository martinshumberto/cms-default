<?php

use Illuminate\Database\Seeder;

use App\Model\Permissions;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $states = DB::table('states')->first();

        if(empty($states))
        {
            $states    = file_get_contents("database/seeds/files/states.json");

            DB::table('states')->insert(json_decode($states, true));
        }

        $cities = DB::table('cities')->first();

        if(empty($cities))
        {
            $cities    = file_get_contents("database/seeds/files/cities.json");

            DB::table('cities')->insert(json_decode($cities, true));
        }   


        $user = DB::table('users')->first();        

        if(empty($user))
        {
            DB::table('users')->insert([
                'type'         => '1',
                'first_name'     => 'Administrador',
                'last_name'      => 'CMS',
                'email'          => 'desenvolvimento@webflavia.com.br',
                'login'          => 'admin',
                'birth'          => '2018-01-01',
                'user_insert'    => '1',
                'date_insert'    => '2018-01-01',
                'photo'          => 'default.jpg',
                'status'         => '1',
                'password'       => bcrypt('123123'),
                'created_at'     => date('Y-m-d H:i:s'),
                'updated_at'     => date('Y-m-d H:i:s')
            ]);
        }

        $definitions = DB::table('definitions')->first();        

        if(empty($definitions))
        {
            DB::table('definitions')->insert([
                'key'               => 'Cf1f11ePArKlBJomM0F6a.0nbdvdH2XNzP9yvICywGYJQ8L9NfZjK',
                'register_for_page' => '20',
                'photos_for_page'   => '20',
                'folder_files'      => '/storage/pb/',
                'timezone'          => 'America/Cuiaba',
                'ext_photos'        => 'gif,jpeg,jpg,png,bmp,JPG,JPEG,PNG,bmp',
                'ext_files'         => 'doc,pdf,docx,swf,SWF,fla,FLA,gif,jpeg,jpg,png,bmp,JPG,JPEG,PNG,bmp,HTML,html,HTM,htm',
                'adverts'           => '2',
                'polls'             => '2',
                'newsletter'        => '2',
                'status_site'       => '1'
            ]);
        }      

        $site = DB::table('site')->first();        

        if(empty($site))
        {
            DB::table('site')->insert([
                'title' => 'Titulo do Site',
                'description'   => 'Descricao do site'
            ]);
        }         
    }
}
