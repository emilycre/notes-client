import { newNote, fetchNotes } from './notesActions';

jest.mock('../services/notesApi.js', () => ({
  createNote() {
    return Promise.resolve([]);
  },
  getNotes() {
    return Promise.resolve([]);
  }
}));

describe('Notes actions', () => {
  it('Creates an action to create a note', () => {
    const noteAction = newNote({
      title: 'N O T E',
      body: 'Super cool.'
    });

    expect(noteAction).toEqual({
      type: 'NEW_NOTE',
      pendingType: 'NEW_NOTE_PENDING',
      fulfilledType: 'NEW_NOTE_FULFILLED',
      rejectedType: 'NEW_NOTE_REJECTED',
      payload: expect.any(Promise)
    });
  });

  it('Creates an action to fetch notes', () => {
    const noteAction = fetchNotes();

    expect(noteAction).toEqual({
      type: 'FETCH_NOTES',
      pendingType: 'FETCH_NOTES_PENDING',
      fulfilledType: 'FETCH_NOTES_FULFILLED',
      rejectedType: 'FETCH_NOTES_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
