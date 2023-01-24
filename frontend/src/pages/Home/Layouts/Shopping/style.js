import styled from "styled-components";

export const Container = styled.div`
width: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
.img-wrapper{
   width: 100%;
}
.content{
    position: absolute;
    left: 20%;
    text-align: center;
    h3{
        font-size: 50px;
        margin-bottom: 25px;
    }
    h4{
        font-size: 30px;
    }
    p{
        color: #555555;
        margin-bottom: 30px;
    }
    button{
        background: #384aeb;
        color: #fff;
        border: none;
        padding: 10px 30px;
        border-radius: 2rem;
        font-size: 15px;
        letter-spacing: 1px;
    }
}
`