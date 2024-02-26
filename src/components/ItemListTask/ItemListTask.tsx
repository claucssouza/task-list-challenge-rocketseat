import TrashItemList from '@/assets/trash';
import { CheckBoxButton, Wrapper } from '@/components/ItemListTask/ItemListTask.styled';
import TaskContext from "@/context/TaskContext";
import { useContext } from 'react';
import { MessageEmptyList } from '../MessageEmptyList/MessageEmptyList';



function ItemListTask() {

    
    const { text: itemListTask, setText: setItemListTask } = useContext(TaskContext);
    const hasItensListTask = itemListTask.length > 0;

    const handleCheckButton = (item: number, conclude: boolean) => {                
        const newList = itemListTask.map((itemListTask, index) => {
            if (item === index) {
                itemListTask.concluded = !conclude;
            }
            return itemListTask;
        })
        setItemListTask(newList)
    }

    const handleRemoveItemListTask = (item: number) => {
       const newList =  itemListTask.filter((_, index) => {
            return index !== item;
        });
        setItemListTask(newList);
    }

    return (
    <>        
       { hasItensListTask ? (
        itemListTask.map((itemList, index) => (
            <Wrapper key={itemList.text}>        
                <CheckBoxButton 
                    type="checkbox"
                    name="chkTaskList"
                    onChange={() => handleCheckButton(index, itemList.concluded)}
                    checked={itemList.concluded}
                    />
                    <span>                    
                        {itemList.text}                    
                    </span>
                    <span onClick={() => handleRemoveItemListTask(index)}>
                        <TrashItemList/>
                    </span>
            </Wrapper>     
        ))): <MessageEmptyList />}
    </>

    )
}
export { ItemListTask };




