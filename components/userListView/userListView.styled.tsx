import styled from "styled-components";

export const UserListViewWrap = styled.div`
  min-height: 500px;
  .table {
    vertical-align: middle;
    border-radius: 8px;
    tr {
      th {
        background-color: #eee;
        /* &:first-child {
          border-radius: 8px 0 0 8px;
        }

        &:last-child {
          border-radius: 0 8px 8px 0;
        } */
      }
      td {
        /* border: 1px solid red; */
        .userInfoBox {
          display: flex;
          .img {
            margin-right: 20px;
            overflow: hidden;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 0px 1px #fddd;
          }
          .info {
            h3 {
            }
            p {
            }
          }
        }
      }
    }
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
`;

export const P = styled.h3`
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: #ccc;
`;
