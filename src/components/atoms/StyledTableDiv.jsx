import styled from "styled-components";

const StyledTableDiv = styled.div`
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;

  block-size: fit-content;
  .table_wrapper {
    display: inline;
  }
  table {
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    max-width: 600px;

    width: 100%;
    height: auto;
    margin: 10px;
    tr:hover {
      background-color: #f5f5f5;
    }

    tr {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 12px;
      border-bottom: 1px solid #dce1ea;
    }
    thead td {
      background-color: #f8ebf2;
      color: #f66154;
      font-weight: bolder;
      font-family: "Poppins", sans-serif;
      width: 100%;
      word-break: break-word;
    }
    thead tr:hover {
      background-color: #f8ebf2;
    }

    td {
      padding: 20px;
      text-align: left;
      font-size: 110%;
    }
    td a {
      flex-wrap: wrap;
      max-width: 50px;
    }
  }
  tbody td {
    font-family: "Alice", serif;
    background-color: #f5f5f5;
    width: 100%;
  }

  @media only screen and (max-width: 630px) {
    padding-left: 1.5em;
    flex-direction: column;

    font-size: 90%;
  }
`;
export { StyledTableDiv };

/**.table {
	font-family: 'Lato', sans-serif;	
}

.tag {
	background-color: #ECF0F5;
	text-transform: uppercase;
	color: #8D9EB0;
	font-weight: bold;
	padding: 5px 7px;
	font-size: 12px;
}

.table__row {
	display: flex;
	flex-direction: row;
	flex-wrap: no-wrap;
	width: 100%;
	padding: 12px;
	border-bottom: 1px solid #DCE1EA;
	box-sizing: border-box;
	
	.table.striped &:not(.table__row--header):nth-child(odd) {
		background-color: rgba(#EFF4FC, .4);
	}
	
	.table.hover &:not(.table__row--header):hover {
		background-color: #EFF4FC;
		box-shadow: 0 1px 2px 0 #E9EFFA;
	}

    &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
} */
