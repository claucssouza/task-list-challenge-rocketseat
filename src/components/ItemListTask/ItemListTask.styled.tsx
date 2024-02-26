import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    border-radius: 0.8rem;
    background: #262626;
    box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #333;
    height: 7.2rem;
    width: 73.6rem;
    color: #F2F2F2;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    font-weight: 400;
    margin-bottom: 1.2rem;
    margin-top: 2.4rem;
    position: relative;
    

    > span {
        margin-left: 1.2rem;
        
    }

    > span  svg {        
        cursor: pointer;
        position: absolute;
        right: 1.0rem;
        top: 2.5rem;
    }
    
    @media(max-width: 768px) {
        width: 100%;       

        span > svg {
            width: 6.3rem;
        }
    }
   
`;

export const CheckBoxButton = styled.input`
    width: 1.3em;
    height: 1.3em;    
    border-radius: 50%;
    vertical-align: middle;
    border: 2px solid #4ea8de;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-left: 1.6rem;

    @media(max-width: 768px) {
        width: 1.7rem;
        height: 1.7rem;  
    }

    &:checked{
        background-color:#5E60CE;
        border: 2px solid #5E60CE;
    }   
`;