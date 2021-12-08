import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { newTask, getTasks, delTask, UpdateTask } from "../reducers/tasks";
import { FcFullTrash, FcEditImage } from "react-icons/fc";
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

      dispatch(newTask({ task: result.data }));
      setTask("");
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
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateTask = async (id) => {
    console.log(id);
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/tasks/update`,
        {
          name: task,
          _id: id,
        },

        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );

      dispatch(UpdateTask(result.data));
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
          value={task}
          onChange={(ev) => setTask(ev.target.value)}
        />
        <button onClick={adTask}>ADD</button>
      </div>
      <div>
        {state.taskReducer.tasks.length &&
          state.taskReducer.tasks.map((items) => {
            return (
              <div key={items._id}>
                <h2>{items.name}</h2>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="text"
                  value={task}
                  onChange={(ev) => setTask(ev.target.value)}
                />
                <FcFullTrash onClick={() => deleteTask(items._id)} />
                <FcEditImage onClick={() => UpdateTask(items._id)} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Task;
