@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>New Entry</h2>
        <form action="{{ route('entry.store', $task->id) }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="body">Body</label>
                @if($errors->has('body'))
                <br>
                    <small class="text-danger">
                        {{ $errors->first('body') }}
                    </small>
                @endif
                <textarea name="body" id="body" cols="30" rows="10" class="form-control {{ $errors->has('body') ? 'is-invalid' : '' }}">{{ old('body') }}</textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Add Entry</button>
            </div>
        </form>
    </div>
@endsection
