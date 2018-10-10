<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('users_id');
            $table->integer('type')->unsigned();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('birth');
            $table->string('email')->unique();
            $table->string('login')->unique()->nullable();
            $table->string('password');
            $table->integer('user_insert');
            $table->date('date_insert');
            $table->integer('user_update')->nullable();
            $table->date('date_update')->nullable();
            $table->datetime('last_acess')->nullable();
            $table->string('photo');
            $table->integer('status')->unsigned();            
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
