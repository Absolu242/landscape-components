import styled from "styled-components";

export const BlogContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 80vh;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #1a1a1a;
  color: #fff;
  overflow: hidden;

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
    position: absolute;
    display: block;
    top: 20rem;
    left: -28rem;
    width: 380px;
    max-height: 1100px;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    transform: rotate(-90deg) translateY(-90px);
    transform-origin: right top;
  }
`;

export const Post = styled.div`
  position: relative;
  flex-direction: column;
  width: 355px;
  height: 240px;
  left: 3.5rem !important;
  right: 3rem;
  padding: 2rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease;
  transform: rotate(90deg);
  transform-origin: right top;

  .post-content {
    position: relative;
    top: 65%;
  }

  .post-title {
    h2 {
      width: 80%;
      font-size: 2rem;
      font-weight: 600;
    }
  }

  .post-link {
    font-size: 1.2rem;
    padding: 2.5rem 0;
    line-height: 2.4rem;
    text-align: left;
  }
`;
