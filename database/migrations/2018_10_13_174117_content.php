<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Content extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->increments('contents_id');
            $table->integer('modules_id');
            $table->integer('categories_id')->nullable();  

            $table->string('title')->nullable(); 
            $table->string('subtitle')->nullable();  
            $table->integer('featured')->nullable();  
            $table->string('featured_image')->nullable();  
            $table->text('summary')->nullable();  
            $table->text('content')->nullable();  
            $table->string('credit_author')->nullable();  
            $table->string('tags')->nullable();  
            $table->date('initial_date')->nullable();  
            $table->date('end_date')->nullable();  
            $table->time('starting_time')->nullable();  
            $table->time('end_time')->nullable();  
            $table->date('publication_date')->nullable();  
            $table->string('amount_1')->nullable();  
            $table->string('amount_2')->nullable();  
            $table->string('amount_3')->nullable();  
            $table->integer('check_1')->nullable();  
            $table->integer('check_2')->nullable();  
            $table->integer('check_3')->nullable();  

            $table->integer('external_link')->nullable();
            $table->integer('optimization_seo')->nullable();
            $table->integer('image_gallery')->nullable();
            $table->integer('video_gallery')->nullable();
            $table->integer('file_gallery')->nullable();
            $table->integer('notifications')->nullable();


            $table->integer('insert_users_id')->nullable();
            $table->integer('update_users_id')->nullable();
            
            $table->integer('status')->unsigned();      
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
        Schema::dropIfExists('contents');
    }
}
