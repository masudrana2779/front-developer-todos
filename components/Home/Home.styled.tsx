import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const HomeContentWrap = styled.div`
  padding: 50px;
  h2 {
    margin-bottom: 15px;
  }
  .loading {
    font-size: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.479);
    color: #000;
    .icon {
      box-shadow: inset 0px 0px 0px 5px #ebebeb;
      border-radius: 50%;
      animation: ${rotate} 2s linear infinite;
      display: flex;
    }
  }
`;

export const SearchBoxWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const SearchBox = styled.div`
  display: flex;
  position: relative;
  margin-right: 25px;
  .icon {
    position: absolute;
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    padding-left: 30px;
    height: 30px;
    border-radius: 50px;
  }
`;
export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterItem = styled.div`
  margin-left: 10px;
  input {
    cursor: pointer;
  }
  label {
    margin-left: 5px;
    cursor: pointer;
  }
`;
export const SwitchWrap = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 58px;
    height: 28px;
    margin-left: 10px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(30px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
