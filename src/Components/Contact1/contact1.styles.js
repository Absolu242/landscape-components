import styled from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactLeft = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  padding: 10rem;

  .logo {
    padding-bottom: 10rem;
  }

  .info {
    padding-bottom: 5rem;

    &-name {
      color: #545656;

      font-size: 1.2rem;
    }

    &-value {
      color: #fff;
      font-size: 1.8rem;
      font-weight: 500;
      padding: 1rem 0;
      width: 80%;

      img {
        padding-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 2rem;
  }
`;

export const ContactRight = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  padding: 10rem;

  .heading {
    h1 {
      font-size: 4rem;
    }
  }
  .text {
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  .form {
    width: 100%;
    &-wrapper {
      display: flex;
      width: 100%;

      div {
        width: 100%;
        input {
          background-color: #f5f5f5;
          padding: 1.5rem 2rem;
          border-radius: 5px;
          border: none;

          &:focus {
            background-color: #fff;
            color: #000;
          }
        }

        &:first-child {
          margin-right: 1rem;
        }
      }

      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
      }
    }

    &-div {
      display: flex;
      flex-direction: column;
      padding: 2rem 0;

      label {
        padding: 1rem 0;
        font-size: 1.4rem;
        font-weight: 600;
      }

      textarea {
        background-color: #f5f5f5;
        padding: 1.5rem 2rem;
        border-radius: 5px;
        border: none;

        &:focus {
          background-color: #fff;
          color: #000;
        }
      }
    }
    .terms {
      flex-direction: row;
      p {
        padding-left: 1rem;
        font-size: 1.3rem;

        a {
          color: #000;
          text-decoration: underline;
        }
      }
    }

    &-btn {
      background-color: #42cb83;
      padding: 1.5rem 2.5rem;
      border-radius: 2.5rem;
      font-weight: 600;
      color: #fff;
      margin: 2rem 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 5rem 2rem;
  }
`;
