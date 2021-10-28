const initialState=[
    {
        id:0,
        titlee:"Redux flux",
        courselength:"6",
        category:"Js",
        author:"Copy-house"


    },
    {
        id:1,
        titlee:"software",
        courselength:"6.8",
        category:"software practice",
        author:"Copy-house"

    }

];
const coursesReducer= (state = initialState,action)=>{
    switch(action.type)
    {
        case "ADD_COURSE":
            state=[...state,action.payload]
            return state;
            case "UPDATE_COURSE":
                const udatestate= state.map((course)=>course.id === action.payload.id ? action.payload : course);
                state=udatestate;
                return state;
            case "DELETE_COURSE":
                 const filterCourse=state.filter((course)=>course.id !==action.payload && course)
                 state=filterCourse;
                 
                return state;
            case "CLEAR_VALUE":
               state = [{ titlee: null, category: null,courselength: null,author:null }];
                 return state;

        default:
            return state;
    }
}
export default coursesReducer;