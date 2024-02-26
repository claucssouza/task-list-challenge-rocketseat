
import { Header } from "@/components/Header/Header";
import { HeaderTaskList } from "@/components/HeaderTaskList/HeaderTaskList";
import { ItemListTask } from "@/components/ItemListTask/ItemListTask";
import { TaskContextProvider } from "@/context/TaskContext";
import { Wrapper } from "./App.styled";

function App() {

  return (
    <TaskContextProvider>
      <Wrapper>
        <Header />
        <HeaderTaskList />
        <ItemListTask />
     </Wrapper>
     </TaskContextProvider>
  )
}

export default App
