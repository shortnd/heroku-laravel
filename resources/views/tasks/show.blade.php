@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>{{ $task->title }}</h1>
        <div>
            <a href="{{ route('tasks.edit', $task->id) }}" class="btn btn-outline-primary">Edit</a>
        </div>
        <div>
            {{ $task->body }}
        </div>
    </div>
@endsection
