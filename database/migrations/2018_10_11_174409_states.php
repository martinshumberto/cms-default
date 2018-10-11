<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class States extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('states', function (Blueprint $table) {
        $table->engine = 'InnoDB';
        $table->increments('states_id');
        $table->string('name');
        $table->string('initials');
        $table->integer('countries_id')->unsigned();
        $table->integer('status')->unsigned();
        $table->integer('cd_ibge')->unsigned();
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
        Schema::dropIfExists('states');
    }
}
