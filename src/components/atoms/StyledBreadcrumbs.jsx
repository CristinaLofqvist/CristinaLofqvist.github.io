import styled from "styled-components";

const StyledBreadcrumb = styled.div`
  width: 100%;


  ul {
    padding: 10px 16px;
    list-style: none;
    text-align: left;
    margin-left:50px;
  }

  li{
    display: inline;
    font-size: 20px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }

  a {
    color: #090f0e;
    text-decoration: none;
   
  }
  a:hover {
    text-decoration:underline;
  }
  li + li:before {
    content: "/";
  }
  .LittleSideNote{
    width:100%;
    display:flex;
    justify-content:flex-end;
    
    p{
      
      font-size:70%;
    }
  }
 
}
`;
export { StyledBreadcrumb };
