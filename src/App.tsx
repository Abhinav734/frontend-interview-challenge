
import React from "react";
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

  const data = [
    {
      "user_id": 1,
      "user_name": "Alice",
      "working_hours": {
        "start": "09:00",
        "end": "17:00",
        "time_zone": "America/New_York"
      },
      "events": [
        {
          "id": 1,
          "title": "Meeting A",
          "start": "2019-01-01T08:00:00-0500",
          "end": "2019-01-01T9:00:00-0500"
        },
        {
          "id": 2,
          "title": "Meeting C",
          "start": "2019-01-01T09:00:00-0500",
          "end": "2019-01-01T10:00:00-0500"
        },
        {
          "id": 3,
          "title": "Meeting C",
          "start": "2019-01-01T11:00:00-0500",
          "end": "2019-01-01T12:00:00-0500"
        },
        {
          "id": 4,
          "title": "Meeting D",
          "start": "2019-01-01T12:00:00-0500",
          "end": "2019-01-01T12:45:00-0500"
        },
        {
          "id": 5,
          "title": "Meeting E",
          "start": "2019-01-01T14:00:00-0500",
          "end": "2019-01-01T15:30:00-0500"
        }
      ]
    },
    {
      "user_id": 2,
      "user_name": "Amir",
      "time_zone": "America/New_York",
      "working_hours": {
        "start": "08:00",
        "end": "16:00",
        "time_zone": "America/New_York"
      },
      "events": [
        {
          "id": 1,
          "title": "Meeting A",
          "start": "2019-01-01T09:00:00-0500",
          "end": "2019-01-01T09:45:00-0500"
        },
        {
          "id": 3,
          "title": "Meeting C",
          "start": "2019-01-01T10:00:00-0500",
          "end": "2019-01-01T10:15:00-0500"
        },
        {
          "id": 5,
          "title": "Meeting E",
          "start": "2019-01-01T11:00:00-0500",
          "end": "2019-01-01T13:45:00-0500"
        },
        {
          "id": 7,
          "title": "Meeting G",
          "start": "2019-01-01T13:30:00-0500",
          "end": "2019-01-01T14:30:00-0500"
        }
      ]
    },
    {
      "user_id": 3,
      "user_name": "Jordan",
      "working_hours": {
        "start": "10:00",
        "end": "18:00",
        "time_zone": "America/Los_Angeles"
      },
      "events": [
        {
          "id": 4,
          "title": "Meeting D",
          "start": "2019-01-01T11:00:00-0800",
          "end": "2019-01-01T12:00:00-0800"
        },
        {
          "id": 6,
          "title": "Meeting F",
          "start": "2019-01-01T11:30:00-0800",
          "end": "2019-01-01T12:45:00-0800"
        },
        {
          "id": 9,
          "title": "Meeting I",
          "start": "2019-01-01T15:30:00-0800",
          "end": "2019-01-01T16:30:00-0800"
        },
        {
          "id": 10,
          "title": "Meeting J",
          "start": "2019-01-01T17:30:00-0800",
          "end": "2019-01-01T18:00:00-0800"
        }
      ]
    }
  ]

  const selectOptions = data.map(el => { 
    return {id: el.user_id, userName: el.user_name}
  })

  const [value, setValue] = React.useState( );

 const handleChange = (selectedOption: any) => {

   setValue(selectedOption.target.value);

  //  console.log("selectedOption  ", selectedOption.target.value)

 };
  console.log("a ", data.filter(el => el.user_name === value).map(el => {
    el.events.filter(el => el.title)
  }))
  return <Container>
    <Contents><div>Meetings</div><div>
    <select value={value} onChange={handleChange}>
<option>Filter By User</option>
{selectOptions.map((option) => (
<option key={option.id} value={option.userName}>{option.userName}</option>

))}

</select>

</div></Contents>
<Contents>

<div><table>
  <thead>

  <tr>
    <th>User</th>
    <th>Meeting</th>
    <th>Time</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    {data.filter(el => el.user_name === value).map(el => {
      return (<td key={el.user_id}>{el.user_name}</td>)
    })}
    {/* {data.filter(el => el.user_name === value).map(el => {
      return 
    })} */}
  {/* {data.filter(el => el.user_name === value).map(el => {
      el.events.filter(el => el.title)
    })} */}
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  </tbody>
</table></div>
</Contents>
  </Container>;
};
