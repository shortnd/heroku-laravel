<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskInertiaController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome');
    }
}
