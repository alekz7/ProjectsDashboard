const initState = {
  projects:[
    { id:'1',title:'do something',content:'details for do something blah blah blah' },
    { id:'2',title:'do something',content:'details for do something blah blah blah' },
    { id:'3',title:'do something',content:'details for do something blah blah blah' }
  ]
}
const projectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT': 
      console.log('created project', action.project);
      break;
  }
  return state;
}
export default projectReducer;