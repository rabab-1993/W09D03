const initialState = {
    tasks: [],
  };
  
  let taskReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ALL_TASKS":
        return payload;
  
      case "NEW_TASK":
        const { task } = payload;
        console.log(state.tasks);
       
        return { b: [...state,task] };
  
      case "DELETE_TASK":
        const { deltask } = payload;
        console.log(state.tasks);
        return { del: state.tasks.filter((el) => el !== deltask) };
        
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  
  export const getTasks = (data) => {
    return {
      type: "ALL_TASKS",
      payload: data,
    };
  };
  
  export const newTask = (data) => {
    return {
      type: "NEW_TASK",
      payload: data,
    };
  };
  export const delTask = (data) => {
    return {
      type: "DELETE_TASK",
      payload: data,
    };
  };
  