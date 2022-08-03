import moment from "moment";
import Image from "next/image";
import { Table } from "react-bootstrap";
import { Name, P, UserListViewWrap } from "./userListView.styled";

type UserListViewComponentProps = {
  items: any,
  num1: number,
  num2: number,
};

const UserListViewComponent = ({ items, num1, num2 }: UserListViewComponentProps) => {
  console.log(items, 55);

  return (
    <>
      {items && items.length > 0 && (
        <UserListViewWrap>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Registration Date</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {items.slice(num1,num2).map((item: any, i: number) => (
                <tr key={i}>
                  <td>
                    <div className="userInfoBox">
                      <div className="img">
                        <Image
                          src={`${item.picture.thumbnail}`}
                          width={50}
                          height={50}
                          alt="img"
                          placeholder="blur"
                          blurDataURL={"/img/FocusContact.jpg"}
                        />
                      </div>
                      <div className="info">
                        <Name>
                          {item.name.title} {item.name.first} {item.name.last}
                        </Name>
                        <P>{item.email}</P>
                      </div>
                    </div>
                  </td>
                  <td>{moment(item.registered.date).format("L")}</td>
                  <td>{item.login.username}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </UserListViewWrap>
      )}
    </>
  );
};

export default UserListViewComponent;
