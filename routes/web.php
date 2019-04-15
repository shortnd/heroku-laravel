<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect(route('tasks.index'));
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => 'auth', 'prefix' => 'tasks'], function () {
    Route::get('/', 'TaskController@index')->name('tasks.index');
    Route::get('create', 'TaskController@create')->name('tasks.create');
    Route::post('', 'TaskController@store')->name('tasks.store');
    Route::get('{task}', 'TaskController@show')->name('tasks.show');
    Route::get('{task}/edit', 'TaskController@edit')->name('tasks.edit');
    Route::patch('{task}', 'TaskController@update')->name('tasks.update');
    Route::delete('{task}', 'TaskController@destroy')->name('tasks.delete');

    Route::get('{task}/new-entry', 'TasksEntriesController@create')->name('entry.create');
    Route::post('{task}/new-entry', 'TasksEntriesController@store')->name('entry.store');

    // Route::group(['prefix' => 'inertia'], function () {
    //     Route::get('', 'TaskInertiaController@index');
    // });
});
