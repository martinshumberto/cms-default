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


        $user = DB::table('users')->first();        

        if(empty($user))
        {
            DB::table('users')->insert([
                'type'         => '1',
                'first_name'     => 'Administrador',
                'last_name'      => 'CMS',
                'email'          => 'admin@admin.com.br',
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
    }
}
