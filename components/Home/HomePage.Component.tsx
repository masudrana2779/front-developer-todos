import { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import UserCardViewComponent from "../userCardView/userCardView.component";
import UserListViewComponent from "../userListView/userListView.component";

import {
  FilterItem,
  FilterWrap,
  HomeContentWrap,
  PaginationWrap,
  SearchBox,
  SearchBoxWrap,
  SwitchWrap,
} from "./Home.styled";

const HomePageComponent = () => {
  const [cardView, setCardView] = useState(false);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [tempItems, setTempItems] = useState([]);
  const [items, setItems] = useState([]);
  const [searchField, setSearchField] = useState("");

  const [preNumverOfItem, setPreNumverOfItem] = useState(0);
  const [nextNumverOfItem, setNextNumverOfItem] = useState(10);

  const handleSearch = (event: any) => {
    setSearchField(event.target.value);
  };

  const filteredItems = items.filter(
    (item: any) =>
      item.login.username.toLowerCase().includes(searchField.toLowerCase()) ||
      item.name.title.toLowerCase().includes(searchField.toLowerCase()) ||
      item.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
      item.name.last.toLowerCase().includes(searchField.toLowerCase()) ||
      item.email.toLowerCase().includes(searchField.toLowerCase())
  );

  const filter = (button: any) => {
    if (button === "All") {
      setItems(tempItems);
    } else {
      const filterData = tempItems.filter(
        (item: any) => item.gender === button
      );
      setItems(filterData);
    }
  };

  const pageNumberSet = (num1: number, num2: number) => {
    setPreNumverOfItem(num1);
    setNextNumverOfItem(num2);
  };

  const pagePreNumberSet = () => {
    setPreNumverOfItem(preNumverOfItem - 10);
    setNextNumverOfItem(nextNumverOfItem - 10);
  };

  const pagNextNumberSet = () => {
    setPreNumverOfItem(preNumverOfItem + 10);
    setNextNumverOfItem(nextNumverOfItem + 10);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then(
        (results) => {
          setItems(results.results);
          setTempItems(results.results);
          setIsLoaded(false);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  console.log(items, "itemsitemsitemzsds");

  return (
    <HomeContentWrap>
      <Container fluid>
        <Row>
          <Col>
            <h2>User List</h2>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col className="col-md-9">
            <SearchBoxWrap>
              <SearchBox>
                <div className="icon">
                  <BiSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search...."
                  className="form-control"
                  onChange={(e) => handleSearch(e)}
                />
              </SearchBox>
              <FilterWrap>
                <div>Filter by:</div>
                <FilterItem>
                  <input
                    type="radio"
                    name="filter"
                    id="all"
                    onClick={() => filter("All")}
                  />
                  <label htmlFor="all">All</label>
                </FilterItem>
                <FilterItem>
                  <input
                    type="radio"
                    name="filter"
                    id="male"
                    onClick={() => filter("male")}
                  />
                  <label htmlFor="male">Male</label>
                </FilterItem>
                <FilterItem>
                  <input
                    type="radio"
                    name="filter"
                    id="female"
                    onClick={() => filter("female")}
                  />
                  <label htmlFor="female">Female</label>
                </FilterItem>
              </FilterWrap>
            </SearchBoxWrap>
          </Col>
          <Col className="col-md-3">
            <SwitchWrap>
              <span>Tile View</span>
              <label className="switch">
                <input type="checkbox" onClick={() => setCardView(!cardView)} />
                <span className="slider round"></span>
              </label>
            </SwitchWrap>
          </Col>
        </Row>
        <Row>
          <Col>
            {isLoaded === true ? (
              <div className="loading">
                <div className="icon">
                  <AiOutlineLoading3Quarters />
                </div>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
        {items && isLoaded === false && (
          <Row>
            <Col>
              {cardView ? (
                <UserCardViewComponent
                  items={filteredItems}
                  num1={preNumverOfItem}
                  num2={nextNumverOfItem}
                />
              ) : (
                <UserListViewComponent
                  items={filteredItems}
                  num1={preNumverOfItem}
                  num2={nextNumverOfItem}
                />
              )}
            </Col>
          </Row>
        )}
        {isLoaded === true ? (
          ""
        ) : (
          <Row className="justify-content-end">
            <Col>
              <PaginationWrap>
                <Pagination>
                  <Pagination.First
                    disabled={preNumverOfItem < 10 ? true : false}
                    onClick={() => pagePreNumberSet()}
                  />
                  <Pagination.Item
                    active={
                      preNumverOfItem === 0 && nextNumverOfItem === 10
                        ? true
                        : false
                    }
                    onClick={() => pageNumberSet(0, 10)}
                  >
                    {1}
                  </Pagination.Item>
                  <Pagination.Item
                    active={
                      preNumverOfItem === 10 && nextNumverOfItem === 20
                        ? true
                        : false
                    }
                    onClick={() => pageNumberSet(10, 20)}
                  >
                    {2}
                  </Pagination.Item>
                  <Pagination.Item
                    active={
                      preNumverOfItem === 20 && nextNumverOfItem === 30
                        ? true
                        : false
                    }
                    onClick={() => pageNumberSet(20, 30)}
                  >
                    {3}
                  </Pagination.Item>
                  <Pagination.Item
                    active={
                      preNumverOfItem === 30 && nextNumverOfItem === 40
                        ? true
                        : false
                    }
                    onClick={() => pageNumberSet(30, 40)}
                  >
                    {4}
                  </Pagination.Item>
                  <Pagination.Item
                    active={
                      preNumverOfItem === 40 && nextNumverOfItem === 50
                        ? true
                        : false
                    }
                    onClick={() => pageNumberSet(40, 50)}
                  >
                    {5}
                  </Pagination.Item>
                  <Pagination.Last
                    disabled={nextNumverOfItem > 40 ? true : false}
                    onClick={() => pagNextNumberSet()}
                  />
                </Pagination>
              </PaginationWrap>
            </Col>
          </Row>
        )}
      </Container>
    </HomeContentWrap>
  );
};
export default HomePageComponent;
