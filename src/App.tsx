import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import moment from 'moment';
export const App = () => {
  interface Data {
    user_id: number;
    user_name: string;
    working_hours: {
      start: string;
      end: string;
      time_zone: string;
    };
    events: Events[];
  }

  interface Events {
    id: number;
    title: string;
    start: string;
    end: string;
  }
  const [apiData, setApiData] = useState<Data[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((response) => response.json())
      .then((data) => {
       setApiData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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

  const selectOptions =
    apiData &&
    apiData.map((el) => {
      return { id: el.user_id, userName: el.user_name };
    });

  const [value, setValue] = React.useState();

  const handleChange = (selectedOption: any) => {
    setValue(selectedOption.target.value);
  };

  console.log("a  ", apiData.filter(el=> el.user_name === value).map(el=> el.events.map(el=>el.start)))
  return (
    <Container>
      <Contents>
        <div>Meetings</div>
        <div>
          <select value={value} onChange={handleChange}>
            <option>Filter By User</option>
            {selectOptions.map((option) => (
              <option key={option.id} value={option.userName}>
                {option.userName}
              </option>
            ))}
          </select>
        </div>
      </Contents>
      <Contents>
        <div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Meeting</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {apiData && apiData
                  .filter((el) => el.user_name === value)
                  .map((el) => {
                    return <td key={el.user_id}>{el.user_name}</td>;
                  })}
                {/* {data.filter(el => el.user_name === value).map(el => {
      return 
    })} */}
                {/* {data.filter(el => el.user_name === value).map(el => {
      el.events.filter(el => el.title)
    })} */}
               

{apiData && apiData
  .filter((el) => el.user_name === value)
  .map((el) => {
    const startWorkingTime = el.working_hours.start;
    const endWorkingTime = el.working_hours.end;
    
 return el.events.map(el => {
  const startEventTime = moment(el.start).format("HH:mm");
  const endEventTime = moment(el.end).format("HH:mm");
  

  if(startEventTime >= startWorkingTime && endEventTime <=endWorkingTime ){
    console.log("condition ", el.title)
return (<td key={el.id}>{el.title}</td>)
  }
})

  })}
               
                {/* <td>Germany</td> */}
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Contents>
    </Container>
  );
};
