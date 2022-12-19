
import { useEffect } from "react";
import styled from "styled-components";
export const App = () => {

  useEffect(()=>{

    fetch("http://localhost:8080/data").then((response) => response.json())
    .then((data) => {
       console.log(data);

    })
    .catch((err) => {
       console.log(err.message);
    });
  },[])

  const Contents = styled.div`
  background-color: red;
  width: 50%;
  display: flex;
  justify-content: center;
  `;
  
  const Container = styled.div`
  
  flex-direction: column;
  display: flex;
  justify-content: center;
  `;
  return <Container>
    <Contents><div>Meetings</div><div><select>

<option value="fruit">Fruit</option>

<option value="vegetable">Vegetable</option>

<option value="meat">Meat</option>

</select></div></Contents>
<Contents>

<div>table</div>
</Contents>
  </Container>;
};
