@extends('layouts.app')

@section('content')
    <div class="container">
        <form action="{{ route('tasks.update', $task->id) }}" method="post">
            @csrf
            @method("PATCH")

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" value="{{ $task->title }}" class="form-control">
            </div>
            <div class="form-group">
                <label for="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="10" class="form-control">{{ $task->body }}</textarea>
            </div>
            <div class="form-group">
                <button type="submit">Update</button>
            </div>
        </form>
        <form action="{{ route('tasks.delete', $task->id) }}" class="btn btn-danger">Delete</form>
    </div>
@endsection
