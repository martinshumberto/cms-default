<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Definitions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('definitions', function (Blueprint $table) {
            $table->increments('definitions_id');
            $table->string('key');
            $table->string('user_cpanel');
            $table->string('password_cpanel');
            $table->integer('register_for_page');
            $table->integer('photos_for_page');
            $table->string('folder_files');
            $table->string('timezone');
            $table->string('ext_photos');
            $table->string('ext_files');
            $table->integer('adverts')->unsigned();
            $table->integer('polls')->unsigned();
            $table->integer('newsletter')->unsigned();
            $table->integer('status_site')->unsigned();
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
        Schema::dropIfExists('definitions');
    }
}
