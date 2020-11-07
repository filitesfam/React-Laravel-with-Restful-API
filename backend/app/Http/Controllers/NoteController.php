<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class NoteController extends Controller
{
    public function index()
    {
        return Note::all();
    }
 
    public function show($id)
    {
        return Note::find($id);
    }

    public function store(Request $request)
    {
        return Note::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $note = Note::findOrFail($id);
        $note->update($request->all());

        return $note;
    }

    public function delete(Request $request, $id)
    {
        $note = Note::findOrFail($id);
        $note->delete();

        return 204;
    }
}