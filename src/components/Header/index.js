import styled from "styled-components";

export default function Header() {
  return (
    <HeaderDiv>
      <Logotype>TrackIt</Logotype>
      <img
        src="https://th.bing.com/th/id/R.442a4b2eea4cf65596f599265467bf2d?rik=g%2fLXHu2jqSPGpQ&riu=http%3a%2f%2fbubblyme.com.au%2fwp-content%2fuploads%2f2018%2f04%2fIMG_4227.jpg&ehk=fdxvTrVW89EFulqL1objXRLCu050C2nDTFcfFoao9pg%3d&risl=&pid=ImgRaw&r=0"
        alt="profile"
      />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
const Logotype = styled.div`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  color: #ffffff;
`;
