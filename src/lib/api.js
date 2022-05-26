const FIREBASE_DOMAIN = 'https://note-taking-app-9601a-default-rtdb.firebaseio.com/';

export async function getAllNotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
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

export async function getSingleNote(noteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes/${noteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedNote = {
    id: noteId,
    ...data,
  };

  return loadedNote;
}

export async function addNote(noteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/notes.json`, {
    method: 'POST',
    body: JSON.stringify(noteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    console.log('Api......Alisha');
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}