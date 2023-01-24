import styled from "styled-components"

export const CardContainer= styled.div`
    .MyCard{
        /* border: 1px solid red; */
        width: 280px;
        height: 380px;
        display: inline-block;
        margin-right: 50px;
        /* height: 280px; */
    .card-img{
        width: 250px;
        height: 250px;
        object-fit: cover;
        text-align: center;
        margin-left: 17px;
        padding-bottom: 10px;
        margin-top: 5px;
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
    }
`