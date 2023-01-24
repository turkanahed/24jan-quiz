import styled from "styled-components";

export const Container = styled.div`
padding: 0px 150px 50px;
   p{
    color: #777;
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
   }
   h2{
    font-size: 35px;
    font-weight: 600;
   }
   .card-desc{
      padding: 25px 25px 25px 0;
      ul{
         padding: 0;
         margin-bottom: 12px;
         display: flex;
         font-size: 15px;
         font-weight: 400;
         color: #777;
      }
      li{
         margin-right: 20px;
      }
      a{
         color: #222;
         font-size: 16px;
         font-weight: 500;
         line-height: 1.3;
         &:hover{
            color: #007bff;
            transition: .3s ease;
         }
      }
      p{
         color: #777;
         font-size: 15px;
         font-weight: 400;
         line-height: 1.6;
         margin-top: 10px;
      }
      button{
         background-color: transparent;
         border: none;
         a{
            font-size: 16px;
         }
      }
   }
`