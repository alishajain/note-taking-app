const FIREBASE_DOMAIN = 'https://note-taking-app-9601a-default-rtdb.firebaseio.com/';

export const getAllNotes = async() => {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch notes.');
  }

  const transformedNotes = [];

  for (const key in data) {
    const noteObj = {
      id: key,
      ...data[key],
    };

    transformedNotes.push(noteObj);
  }

  return transformedNotes;
}

export const getSingleNote = async (noteId) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes/${noteId}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch note.');
  }

  const loadedNote = {
    id: noteId,
    ...data,
  };

  return loadedNote;
}

export const changeNoteType = async({noteId, noteType}) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes/${noteId}.json`, {
  method: 'PATCH',
  body: JSON.stringify({"type": noteType}),
  headers: {
    'Content-Type' : 'application/json'
  }
    
});
  const data = await response.json();
  if(!response.ok) {
    throw new Error(data.message || 'Could not move the note!!!');
  }

  const loadedNote = {
    id: noteId,
    type: noteType,
    ...data
  };

  return loadedNote;
}

export const editNoteData = async({noteId, noteText}) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes/${noteId}.json`, {
    method: 'PATCH',
    body: JSON.stringify({text: noteText}),
    headers: {
      'Content-Type' : 'application/json'
    }
  });

  const data = await response.json();
  if(!response.ok) {
    throw new Error(data.message || 'Could not edit the note!!!');
  }

  const loadedNote = {
    id: noteId,
    text: noteText,
    ...data
  };

  return loadedNote;
}

export const addNote = async(noteData) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes.json`, {
    method: 'POST',
    body: JSON.stringify(noteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}