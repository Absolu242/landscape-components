import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  color: #fff;
  padding: 2rem 5rem 0rem 5rem;
  transition: all 0.5s ease;
`;
export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
`;
export const HeaderLeft = styled.div``;
export const HeaderCenter = styled.div`
  position: relative;

  input {
    background-color: #fafafa;
    padding: 0.8rem 3rem 0.8rem 1.8rem;
    border-radius: 25px;
    border: none;
  }
  img {
    position: absolute;
    right: 1rem;
    top: 0.6rem;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  .btn {
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    transition: all 0.3s ease;
    padding-left: 2.5rem;
  }
`;
export const HeaderMain = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  transform: translate(0, 10%);
  transition: all 0.3s ease;

  .main {
    position: relative;
    width: 80%;

    .socials {
      position: absolute;
      padding-bottom: 2rem;
      display: flex;
      flex-direction: column;
      transform: translate(80vw, 50%);

      a {
        padding: 1rem 0;

        img {
          position: relative;
          top: 0.2rem;
        }
      }
    }
  }
`;
export const HeaderBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  .lang {
    .btn-lang {
      color: #aaa;
    }
    span {
      font-size: 1.5rem;
      padding: 0 0.5rem;
      color: #aaa;
    }
    .active {
      color: #000;
    }
  }

  .slide-index {
    color: #000;
    font-size: 1.8rem;

    .active {
      color: #42cb83;
    }
    .separator {
      padding: 0 1rem;
    }
  }

  .slide-buttons {
    button {
      outline: none;
    }
  }
`;

export const MainImages = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  color: #000;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.index === props.id ? 1 : 0)};
  right: ${(props) => (props.index === props.id ? "15rem" : 0)};
  transform: translate(15rem, 0%);

  .main__left {
    width: 50%;
    .label {
      background-color: #fafafa;
      font-weight: 600;
      color: #000;
      width: fit-content;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 1.2rem;
    }

    .item {
      position: relative;
      &-name {
        font-size: 6rem;
        font-weight: 700;
        color: #000;
        text-transform: capitalize;
        padding-top: 4rem;
      }

      .ref {
        width: 55%;
        padding-top: 1rem;
        font-size: 1.8rem;
        line-height: 3rem;
      }
    }

    .btn-buy {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1.2rem 2.5rem;
      border-radius: 25px;
      color: #fff;
      background-color: #42cb83;
      font-weight: 600;
      font-size: 1.3rem;

      img {
        padding-right: 1rem;
      }
    }
  }

  .main__right {
    width: 60%;
    img {
      width: 50vw;
    }
  }
`;
