import { Wrapper } from '@/components/MessageEmptyList/MessageEmptyList.styled';

function MessageEmptyList() {
    return (
        <Wrapper>
            <img src="../images/clipboard.svg" />
            <p>Você ainda não tem tarefas cadastradas<br/>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </p>            
        </Wrapper>
        
    
    )
}

export { MessageEmptyList };
