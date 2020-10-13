export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {    
    
    // reference to database
    const firestore = getFirestore();

    // reference to the project collection
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'React',
      authorLastName: 'Skynet',
      authorId: 12345,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch(err=>{
      dispatch({ type: 'CREATE_PROJECT_ERROR', err});
    })
  };
}