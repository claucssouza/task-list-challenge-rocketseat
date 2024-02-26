import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const InputStyled = styled.input`
    border-radius: 0.8rem;
    background: #262626;
    border: 1px solid  #0D0D0D;
    height: 5.4rem;
    width: 63.8rem;
    color: #FFFFFF;   

    &::placeholder {
        font-size: 1.6rem;        
        font-weight: 400;
        padding-left: 1.6rem;
    }
`;

export const ButtonStyled = styled.button`
    width: 9.0rem;
    height: 5.2rem;
    background: #1E6F9F;
    border-radius: 0.8rem;
    border: none;
    color: #F2F2F2;
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 0.4rem;
    cursor: pointer;

    > svg {        
        left: 5px;
        top: 2px;
        position: relative;
    }
  
   @media (max-width: 430px) {
    > svg {
        visibility: hidden;
    }
   }
    
`;
