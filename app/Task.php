<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $guarded = [];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }
}
