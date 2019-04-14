@extends('layouts.app')

@section('content')
<div class="container">
    <form action="{{ route('tasks.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }}" value="{{ old('title') }}">
            @if ($errors->has('title'))
                <small class="text-danger">{{ $errors->first('title') }}</small>
            @endif
        </div>
        <div class="form-group">
            <label for="body">Body</label>
            <textarea name="body" id="body" cols="30" rows="10"
                class="form-control {{ $errors->has('body') ? 'is-invalid' : '' }}">{{ old('body') }}</textarea>
            @if ($errors->has('body'))
                <small class="text-danger">{{ $errors->first('body') }}</small>
            @endif
        </div>
        <div class="form-group">
            <button type="submit">Add Task</button>
        </div>
    </form>
</div>
@endsection
