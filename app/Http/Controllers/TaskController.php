<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Auth::user()->tasks()->get();

        return view('tasks/index')->withTasks($tasks);
    }

    public function create()
    {
        return view('tasks/create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:3',
            'body' => 'required|min:3'
        ]);

        $task = new Task;
        $user = Auth::user();

        $task->title = $request->title;
        $task->body = $request->body;
        $task->user_id = $user->id;
        $task->save();

        return redirect(route('tasks.index'));
    }

    public function show(Task $task)
    {
        return view('tasks.show')->withTask($task);
    }

    public function edit(Task $task)
    {
        return view('tasks.edit')->withTask($task);
    }

    public function update(Request $request, Task $task)
    {
        $this->validate($request, [
            'title' => 'required|min:3',
            'body' => 'required|min:3'
        ]);

        $task->title = $request->title;
        $task->body = $request->body;
        $task->save();

        return redirect(route('tasks.show', $task->id));
    }

    public function destroy(Task $task)
    {
        //
    }
}
