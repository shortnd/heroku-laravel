<?php

namespace App\Http\Controllers;

use App\Task;
use App\Entry;
use Illuminate\Http\Request;

class TasksEntriesController extends Controller
{
    public function create(Task $task)
    {
        return view('tasks.entries.create')->withTask($task);
    }

    public function store(Request $request, Task $task)
    {
        $this->validate($request, [
            'body' => 'required'
        ]);

        $entry = new Entry;
        $entry->body = $request->body;
        $entry->task_id = $task->id;
        $entry->save();

        return redirect(route('tasks.show', $task->id));
    }
}
