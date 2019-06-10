import reducer from './notesReducer';
import { NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

describe('Notes reducer', () => {
  it('Handles the NEW_NOTE_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('Handles the NEW_NOTE action', () => {
    const initialState = {
      loading: true,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: {
        title: 'T I T L E',
        body: 'What a neat note.'
      }
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'T I T L E', body: 'What a neat note.' }]
    });
  });
});
