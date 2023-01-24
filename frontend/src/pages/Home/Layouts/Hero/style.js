import styled from "styled-components"

export const HeroContainer = styled.div`
background-color: #F1F6F7;
    .col-3{
        img{
            height: 634px;
            left: 200px;
            position: absolute;
            top: 140px;
        }
    }
    .col-6{
        position: absolute;
        right: 0px;
        top: 300px;
        h4{
            font-size: 30px;
            color: #555555;
            margin-bottom: 12px;
            font-weight: 400;
        }
        h1{
            font-size: 50px;
            font-weight: bold;
        }
        p{
            font-size: 15px;
            color: #555555;
            line-height: 1.5rem;
            margin: 30px 0;
            width: 500px;
        }
        button{
            background-color: #384aeb;
            border: none;
            border-radius: 2rem;
            padding: 15px 30px;
            color: white;
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
`