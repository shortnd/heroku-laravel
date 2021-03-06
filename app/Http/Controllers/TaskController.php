<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Auth::user()->tasks()->get();

        return Inertia::render('Tasks/Index', ['tasks' => $tasks]);
    }

    public function create()
    {
        return Inertia::render('Tasks/Create');
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
        $entries = $task->entries()->get();

        return Inertia::render('Tasks/Show', ['task' => $task, 'entries' => $entries]);
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
