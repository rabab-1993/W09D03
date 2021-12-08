import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { newTask, getTasks, delTask } from "../reducers/tasks";
import { FcFullTrash } from "react-icons/fc";
const Task = () => {
  const [task, setTask] = useState("");
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    allTask();
  }, []);

  //   get all tasks
  const allTask = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/tasks`,
        // { user: state.signIn.id},
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      const data = {
        tasks: result.data,
      };
      dispatch(getTasks(data));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  // add a new task
  const adTask = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/tasks/task`,
        {
          name: task,
          user: state.signIn.id,
        },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );

      dispatch(newTask(result.data));
    } catch (error) {
      console.log(error);
    }
    allTask();
  };

  const deleteTask = async (id) => {
    console.log(id);
    try {
      const result = await axios.delete(
        `${
          process.env.REACT_APP_BASE_URL
        }/tasks/delete?isDeleted=${true}&_id=${id}`,

        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      dispatch(delTask(result.data));
      console.log(state.signIn.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="text"
          onChange={(ev) => setTask(ev.target.value)}
        />
        <button onClick={adTask}>ADD</button>
      </div>
      <div>
        {state.taskReducer.tasks && state.taskReducer.tasks.map((items) => {
          return (
            <div key={items._id}>
              <h2>{items.name}</h2>
              <FcFullTrash onClick={() => deleteTask(items._id)} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Task;
