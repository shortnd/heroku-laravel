@extends('layouts.app')

@section('content')
<div class="container">
    @forelse ($tasks as $task)
        <a href="{{ route('tasks.show', $task->id) }}">{{ $task->title }}</a>
    @empty
        <h2>No Tasks</h2>
    @endforelse
</div>
@endsection
