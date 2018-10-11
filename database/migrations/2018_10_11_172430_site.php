<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Site extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site', function (Blueprint $table) {
            $table->increments('site_id');
            $table->string('title');
            $table->text('description');
            $table->text('keywords');
            $table->string('email');
            $table->string('password_email');
            $table->string('phone');
            $table->string('address');
            $table->string('district');
            $table->string('zip_code');
            $table->string('states_id');
            $table->string('cities_id');
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
        Schema::dropIfExists('site');
    }
}
