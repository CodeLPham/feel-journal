export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to database TODO; used to add or do whatever to database

        const firestore = getFirestore(); //gives us a refference to firebase database
        firestore.collection('projects').add({
            ...project, //same as project.title, project.content
            authorFirstName: 'Leon',
            authorLastName: 'Pham',
            authorId: 55555,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        }) 
        console.log('added to FIREBASE');
    }
};