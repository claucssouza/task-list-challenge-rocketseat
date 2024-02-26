import { Count } from "@/components/Count/Count";
import { Wrapper } from "@/components/HeaderTaskList/HeaderTaskList.styled";
import TaskContext from "@/context/TaskContext";
import { useContext } from "react";

function HeaderTaskList() {

    const { text: task } = useContext(TaskContext);
    const totalConcludeList = task.length;
    const findTotalConclude = task.filter(task  => task.concluded === true);
    const totalConclude = findTotalConclude.length;    
    
    return (
        <Wrapper>
            <div><span>Tarefas criadas</span><Count textCount={String(totalConcludeList)} /></div>
            <div><span>Concluídas</span><Count textCount={`${totalConclude} de ${totalConcludeList}`}/></div>
        </Wrapper>
    );
}

export { HeaderTaskList };
