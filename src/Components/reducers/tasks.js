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
        return { tasks: [...state.tasks , task] };
  
      case "DELETE_TASK":
        const { deltask } = payload;
        return { tasks: state.tasks.filter((el) => el._id !== deltask) };

      case "UPDATE_TASK":
        const { Updtask } = payload;
        console.log(Updtask);
        return { tasks: state.tasks.map((el) => el._id == Updtask) };
        
  
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
      payload: {deltask: data[0]._id },
    };
  };

  export const UpdateTask = (data) => {
   
    return {
      type: "UPDATE_TASK",
      payload: {Updtask: data[0]._id },
    };
  };
  