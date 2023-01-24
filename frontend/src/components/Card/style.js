import styled from "styled-components"

export const CardContainer= styled.div`
    .MyCard{
        border-radius: 5px;
        width: 250px;
        height: 380px;
        display: inline-block;
        margin-right: 50px;
        text-align: center;
    .card-img{
        width: 100%;
        height: 270px;
        object-fit: cover;
        text-align: center;
        padding-bottom: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .card-desc{
        padding: 20px;
        text-align: center;
        h4{
            color: black;
            font-size: 20px;
            font-weight: 500;
            line-height: 1.1;
        }
        h5{
            font-size: 18px;
            font-weight: 500;
            color: #777;
        }
        p{
            margin: 0;
        }
    }
    button{
        background-color: rgb(165, 7, 7);
        color: white;
        font-size: 15px;
        border: none;
        border-radius: 2rem;
        padding: 10px 40px;
        letter-spacing: 1px;
    }
}
`