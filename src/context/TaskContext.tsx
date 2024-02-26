import { createContext, useState } from "react";


export type TaskType = {
  text: string;
  concluded: boolean;

}

export type TaskContextType = {
  text: TaskType[];
  setText: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

const DEFAULT_VALUE = {
  text: [],
  setText: () => {}
}

const TaskContext = createContext<TaskContextType>(DEFAULT_VALUE);


const TaskContextProvider = ({children}: React.PropsWithChildren) => {
  const [ text, setText ] = useState(DEFAULT_VALUE.text);

  return (
    <TaskContext.Provider value={{text, setText}}>
      {children}
    </TaskContext.Provider>
  );
} 

export { TaskContextProvider };
export default TaskContext;


