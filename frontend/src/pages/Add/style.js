import styled from "styled-components";

export const AddContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 700px;
    transform: translate(50%);
    height: 100vh;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 50px;
    margin-top: 50px;
    text-align: center;
    h1{
        font-size: 50px;
        margin-bottom: 50px;
        letter-spacing: 1px;
    }
    input{
        width: 600px;
        height: 70px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 2px solid #EEEEEE;
        outline: none;
        &::placeholder{
            padding: 10px;
            font-size: 15px;
            color: gray;
        }
    }
    button{
        background-color:rgba(0,35,71,0.980392);
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 2rem;
        padding: 20px 100px;
        letter-spacing: 1px;
        margin-top: 30px;
    }
`