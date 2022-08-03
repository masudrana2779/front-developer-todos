import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BsCalendarDate } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Name, P } from "../userListView/userListView.styled";
import { UserCard, UserCardViewWrap } from "./userCardView.styled";
type UserCardViewComponentProps = {
  items: any;
  num1: number;
  num2: number;
};
const UserCardViewComponent = ({
  items,
  num1,
  num2,
}: UserCardViewComponentProps) => {
    console.log(num1)
    console.log(num2)
  return (
    <>
      {items && items.length > 0 && (
        <UserCardViewWrap>
          <Container fluid>
            <Row>
              {items.slice(num1,num2).map((item: any, i: number) => (
                <div className="col-md-3 col-sm-6 col-12" key={i}>
                  <UserCard className="UserCardViewInner">
                    <div className="img">
                      <div className="imgInner">
                        <Image
                          src={`${item.picture.thumbnail}`}
                          width={50}
                          height={50}
                          alt="img"
                          placeholder="blur"
                          blurDataURL={"/img/FocusContact.jpg"}
                        />
                      </div>
                    </div>
                    <div className="info">
                      <Name>
                        {item.name.title} {item.name.first} {item.name.last}
                      </Name>
                      <P>{item.email}</P>
                      <div className="para">
                        <div className="uIcon">
                          <FaUserAlt />
                        </div>
                        <div className="text">{item.login.username}</div>
                      </div>
                      <div className="para">
                        <div className="uIcon">
                          <BsCalendarDate />
                        </div>
                        <div className="text">
                          {moment(item.registered.date).format("L")}
                        </div>
                      </div>
                    </div>
                  </UserCard>
                </div>
              ))}
            </Row>
          </Container>
        </UserCardViewWrap>
      )}
    </>
  );
};

export default UserCardViewComponent;
