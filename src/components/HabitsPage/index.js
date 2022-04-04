import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import NavigationBar from "../NavigationBar";

export default function HabitsPage() {

  const idChumbado = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc4MiwiaWF0IjoxNjQ5MTA2OTMyfQ.3EgPK3QPVFaxK2hvx9JKIXt5VPa8Rb4afUQyE1-iqBM" // meu id chumbado
  const [name, setName]=useState("");
  const [days, setDays] =useState([]);

  function chooseDay(num){
    console.log(days.includes(num));
    if(!days.includes(num)){
      setDays([...days,num]);
      console.log(days)
    }
  }
  function saveNewHabit(){
    const body = {
      name: name,
      days: days
    };
    console.log(body);
    const config = {
      headers: {
        Authorization: `Bearer ${idChumbado}`
      }
    }
    console.log(config);

    const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);

    request.then((success)=>{console.log(success)});
    request.catch((problem)=>{console.log(problem)});

  }

  return (
    <HabitsPageContainer>
      <Header />
      <HabitsHeader>
        <p>Meus hábitos</p>
        <div>+</div>
      </HabitsHeader>
      <CreateHabit>
        <HabitName placeholder="nome do hábito" onChange={(event)=>setName(event.target.value)}/>
        <WeekDays>
          <WeekDay onClick={()=>chooseDay(1)}>S</WeekDay>
          <WeekDay  onClick={()=>chooseDay(2)}>T</WeekDay>
          <WeekDay onClick={()=>chooseDay(3)}>Q</WeekDay>
          <WeekDay onClick={()=>chooseDay(4)}>Q</WeekDay>
          <WeekDay onClick={()=>chooseDay(5)}>S</WeekDay>
          <WeekDay  onClick={()=>chooseDay(6)}>S</WeekDay>
          <WeekDay onClick={()=>chooseDay(7)}>D</WeekDay>
        </WeekDays>
        <Buttons>
          <CancelButton>Cancelar</CancelButton>
          <SaveButton onClick={()=>saveNewHabit()}>Salvar</SaveButton>
        </Buttons>
      </CreateHabit>
      <NoHabitsMessage>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsMessage>
      <Habits></Habits>
      <div> haushahushahsuhauhs </div>
      <div> haushahushahsuhauhs </div>
      <div> haushahushahsuhauhs </div>
      <NavigationBar />
    </HabitsPageContainer>
  );
}

const HabitsPageContainer = styled.div`
  margin-top: 70px;
  background-color: #F2F2F2;
  min-height: 100vh;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HabitsHeader = styled.div`
  width: 340px;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;
  }
  div{
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

  }
`;
const CreateHabit= styled.div`
  width: 340px;
  height: 180px;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding-left: 19px;
  margin-top: 20px;
`;
const HabitName = styled.input`
  width: 303px;
  height: 45px;
  background-color: #FFFFFF;
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  color: #DBDBDB;
  margin-top: 18px;
  margin-bottom: 8px;
`;
const WeekDays = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const WeekDay =styled.div`
  width: 30px;
  height: 30px;
  background-color: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  color: #DBDBDB;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 29px;
  align-items: center;
  justify-content: right;
  padding-right: 16px;
`;
const CancelButton=styled.div`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 15.976px;
  color: #52B6FF;
`;
const SaveButton = styled.div`
  width: 84px;
  height: 35px;
  background-color: #52B6FF;
  border-radius: 4.63636px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 15.976px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 23px;
`;

const NoHabitsMessage = styled.div`
  width: 340px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  color: #666666;
  margin-top: 29px;
`;

const Habits = styled.div`
`;