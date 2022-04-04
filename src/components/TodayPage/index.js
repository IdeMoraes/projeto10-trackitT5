import styled from "styled-components";
import Header from "../Header";
import NavigationBar from "../NavigationBar";

export default function TodayPage() {
  return (
    <TodayPageContainer>
      <Header />
      <Day>Segunda, 17/05 (Chumbado)</Day>
      <Status>Nenhum hábito concluído ainda (Chumbado)</Status>
      <div> haushahushahsuhauhs </div>
      <div> haushahushahsuhauhs </div>
      <div> haushahushahsuhauhs </div>
      <div> haushahushahsuhauhs </div>
      <div> haushahushahsuhauhs </div>
      <div> haushahushahsuhauhs </div>
      <NavigationBar />
    </TodayPageContainer>
  );
}

const TodayPageContainer = styled.div`
  margin-top: 70px;
  background-color: #F2F2F2;
  min-height: 100vh;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Day = styled.div`
  width: 340px;
  padding-top: 28px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  color: #126BA5;
`;
const Status = styled.div`
  width: 340px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  color: #BABABA;
  margin-top: 5px;
`;
