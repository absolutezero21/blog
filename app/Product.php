<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	/**
	 * The attributes that is mass assignable.
	 * 
	 * @var array
	 */
	protected $fillable = [
		'name', 'detail'
	];
}
