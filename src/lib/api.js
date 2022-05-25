const DOMAIN = "https://note-taking-app-9601a-default-rtdb.firebaseio.com/";

export const getAllNotes = async () => {
  const response = await fetch(`${DOMAIN}/notes.json`);
  const data = await response.data;

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch notes");
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

export const getSingleNote = (quoteId) => {
    const response = await fetch(`${DOMAIN}/notes/${noteId}.json`);
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch note');
    }

    const loadedNote = {
        id: noteId,
        ...data
    };

    return loadedNote;
}

export const addNote = (noteData) => {
    const response = await fetch(`${DOMAIN}/notes.json`, {
        method: 'POST',
        body: JSON.stringify(noteData),
        headers:{
            'Content-Type': 'application/json'
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(error.message || 'Could not create Note!!!');
    }

    return null;
}
