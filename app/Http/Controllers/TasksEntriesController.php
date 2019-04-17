<?php

namespace App\Http\Controllers;

use App\Task;
use App\Entry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TasksEntriesController extends Controller
{
    public function create(Task $task)
    {
        return Inertia::render('Tasks/Entry/Create', ['task' => $task]);
        // return view('tasks.entries.create')->withTask($task);
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

    public function delete(Task $task, Entry $entry)
    {
        $entry->delete();

        return response()->json(['message' => 'Entry Deleted']);
    }
}
