import styled from "styled-components";

export const UserCardViewWrap = styled.div`
  margin-bottom: 50px;
  min-height: 450px;
  .UserCardViewInner {
    /* display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr); */
  }
`;
export const UserCard = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;

  .img {
    margin-right: 20px;
    .imgInner {
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      width: 50px;
      height: 50px;
    }
  }
  .info {
    .para {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-bottom: 5px;
      .uIcon {
        display: flex;
        margin-right: 5px;
      }
    }
  }
`;
