import logo from './logo.svg';
import React, {Component} from 'react';
import Customer from './components/Customer';
import {Table} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableRow}  from '@mui/material';
import {TableCell} from '@mui/material';
import './App.css'; 
import {Paper} from '@mui/material';



const customers = [{
  'id' :1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' :2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '이동현2',
  'birthday' : '871222',
  'gender' : '남자',
  'job' : '취준생'
},
{
  'id' :3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '이동현',
  'birthday' : '900814',
  'gender' : '남자',
  'job' : '취준생'
}
]
class App extends Component {
  render(){
  return (
    <div>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell align='center'>직업</TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
      { customers.map(c => {return(<Customer key = {c.id } id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
      
      </TableBody>
      </Table>  
      </div> 
  );
}
}
export default App;