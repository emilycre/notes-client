export const createNote = note => {
  return Promise.resolve({
    _id: '00001',
    ... note
  });
};
