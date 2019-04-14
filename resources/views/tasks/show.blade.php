@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>{{ $task->title }}</h1>
        <div>
            <a href="{{ route('tasks.edit', $task->id) }}" class="btn btn-outline-primary">Edit</a>
        </div>
        <div class="mb-5">
            {{ $task->body }}
        </div>
        @if($task->entries)
            @foreach ($task->entries as $entry)
            <div class="card card-body">
                {{ $entry->body }}
            </div>
            @endforeach
        @endif
        <div class="mt-5">
            <a href="{{ route('entry.create', $task->id) }}" class="btn btn-secondary">Add New Entry</a>
        </div>
    </div>
@endsection
