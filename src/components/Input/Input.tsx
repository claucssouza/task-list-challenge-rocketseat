import PlusButton from "@/assets/plus";
import { ButtonStyled, InputStyled, Wrapper } from '@/components/Input/Input.styled';
import TaskContext from "@/context/TaskContext";
import { useContext } from "react";


function Input () {
    
    const { setText } = useContext(TaskContext);

    const handleAddItemTask = (event: any)  => {
        event.preventDefault();
        setText(prev => [...prev,  {text: event.target.elements.task.value, concluded: false}]);

    }

    return (
    <Wrapper>
        <form onSubmit={handleAddItemTask}>
        <InputStyled id="task" placeholder='Adicione uma nova tarefa' type="text"/>
        <ButtonStyled type="submit">
           Criar
         <PlusButton />          
        </ButtonStyled >
        </form>
    </Wrapper>
    )
}

export { Input };
