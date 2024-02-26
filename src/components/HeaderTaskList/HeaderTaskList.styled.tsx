import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 73.8rem;
    color: #4EA8DE;
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 6.5rem;

    & span {
        margin-right: 0.8rem;        
    }

    & :nth-child(2) > span{
        color: #8284FA;
    }
    @media(max-width: 768px) {
        width: 100%;
    }
`;