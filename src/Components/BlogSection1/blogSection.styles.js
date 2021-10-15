import styled from "styled-components";

export const BlogContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  .title {
    position: relative;

    h2 {
      font-size: 4.5rem;
      color: #000;
      font-weight: 600;
    }
  }

  .filter {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 4rem 0;
  }
  .posts {
    display: flex;
    justify-content: space-between;
  }
`;

export const FilterItem = styled.button`
  padding: 0.8rem 2rem;
  margin: 0 1rem;
  background-color: ${(props) => (props.filter === props.label ? "#000" : "")};
  color: ${(props) => (props.filter === props.label ? "#fff" : "#000")};
  border: none;
  border-radius: 25px;
  font-weight: 600;
  outline: none;
  transition: all 0.3s ease;
`;

export const Post = styled.div`
  position: relative;
  flex-direction: column;
  width: 30rem;
  margin: 0 1.5rem;
  opacity: ${(props) =>
    props.filter === props.category || props.filter === "" ? 1 : 0};
  transition: all 0.3s ease;

  .post-content {
    position: relative;
    //background-color: red;
  }

  .post-image {
    width: 30rem;
  }

  .post-date {
    color: #d6d6d6;
    font-size: 1.4rem;
    padding: 1rem 0;

    img {
      padding-right: 1rem;
    }
  }

  .post-title {
    h2 {
      font-size: 2.5rem;
      font-weight: 600;
    }
  }

  .post-exc {
    font-size: 1.4rem;
    padding: 2rem 0;
    line-height: 2.4rem;
    text-align: left;
  }

  .post-interaction {
    display: flex;
    span {
      display: flex;
      align-items: center;
      padding-right: 0.5rem;
      img {
        padding: 0 0.5rem;
      }
    }
  }
`;
