import styled from "styled-components";

export const LeftSide = styled.div`
display: flex;
column-gap: 40px;
    h3{
        font-weight: 500;
        font-size: 30px;
    }
    ul{
        margin-top: 10px;
        display: flex;
        column-gap: 20px;
        a{
            color: black;
            font-size: 15px;
            letter-spacing: 1px;
            &.active{
                color: #384aeb;
            }
        }
    }
`

export const RightSide = styled.div`
    display: flex;
    column-gap: 20px;
    span{
        margin-top: 10px;
        font-size: 20px;
    }
    sup{
        color: white;
        border-radius: 50%;
        background-color: #384aeb;
        font-size: 10px;
        padding: 3px 5px;
    }
    button{
        background-color: transparent;
        border:1px solid #EEEEEE;
        border-radius: 2rem;
        padding: 10px 40px;
        color: black;
        font-weight: 500;
        letter-spacing: 1px;
    }
`