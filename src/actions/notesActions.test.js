import { newNote } from './notesActions';

// Faking API call - no need to revisit test file
jest.mock('../services/notesApi.js', () => ({
  createNote() {
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
});
