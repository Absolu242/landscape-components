import React, { useState } from "react";
import "./header.css";
import {
  Header,
  HeaderBottom,
  HeaderCenter,
  HeaderLeft,
  HeaderMain,
  HeaderNav,
  HeaderRight,
  MainImages,
} from "./headerCar.styles";

const images = [
  {
    name: "Landing Page Design  1",
    img: "/images/Other1.jpg",
    text: "For different Moods, width differents settings 1",
  },
  {
    name: "Landing Page Design  2",
    img: "/images/Header5.jpg",
    text: "For different Moods, width differents settings 2",
  },
  {
    name: "Landing Page Design  3",
    img: "/images/Header12.jpg",
    text: "For different Moods, width differents settings 3",
  },
  {
    name: "Landing Page Design  4",
    img: "/images/Header4.jpg",
    text: "For different Moods, width differents settings 4",
  },
  {
    name: "Landing Page Design  5",
    img: "/images/Footer.jpg",
    text: "For different Moods, width differents settings 5",
  },
];

export default function HeaderCar() {
  const [id, setId] = useState(0);

  //   console.log("id", id);

  //   console.log("id2", id2);
  return (
    <>
      <Header>
        <HeaderNav>
          <HeaderLeft>
            <img src="/Logo.png" alt="menu" className="logo-icon" />
          </HeaderLeft>

          <HeaderCenter>
            <input type="text" placeholder="Search" />
            <img src="/Icon.png" alt="menu" className="search-icon" />
          </HeaderCenter>

          <HeaderRight>
            <button className="btn btn-cart">
              {" "}
              <img src="/Cart.png" alt="menu" className="logo-icon" />
            </button>
            <button className="btn btn-menu">
              {" "}
              <img src="/Menu.png" alt="menu" className="logo-icon" />
            </button>
          </HeaderRight>
        </HeaderNav>

        <HeaderMain>
          <div className="main">
            {images.map((item, i) => {
              return (
                <MainImages key={i} index={i} id={id}>
                  <div className="main__left">
                    <div className="label">
                      <p>BEST SELLER</p>
                    </div>

                    <div className="item">
                      <p className="item-name">{item.name}</p>
                      <p className="ref">{item.text}</p>
                    </div>

                    <button className="btn btn-buy">
                      <img src="/IconWhite.png" alt="" /> Buy now
                    </button>
                  </div>

                  <div className="main__right">
                    <img src={item.img} alt="" />
                  </div>
                </MainImages>
              );
            })}

            <div className="socials">
              <a href="https://google.com">
                <img src="/Facebook.png" alt="facebook icon" />
              </a>
              <a href="https://google.com">
                <img src="/Twitter.png" alt="twitter icon" />
              </a>
              <a href="https://google.com">
                <img src="/Facebook.png" alt="intagram icon" />
              </a>
            </div>
          </div>
        </HeaderMain>

        <HeaderBottom>
          <div className="lang">
            <button className="btn-lang active">En</button>
            <span>/</span>
            <button className="btn-lang ">Ru</button>
          </div>

          <div className="slide-index">
            <span className="active">0{id + 1}</span>
            <span className="separator">/</span>
            <span>0{images.length}</span>
          </div>

          <div className="slide-buttons">
            <button onClick={() => setId(id > 0 ? id - 1 : id)}>
              <img src="Left.png" alt="left arrow" />
            </button>
            <button
              onClick={() => setId(id === images.length - 1 ? 0 : id + 1)}
            >
              <img src="Right.png" alt="right arrow" />
            </button>
          </div>
        </HeaderBottom>
      </Header>

      {/* <div className="container">
        {images.map((item, i) => {
          return (
            <MainImages key={i} index={i} id={id2}>
              <p>{item.name}</p>
              <img src={item.img} alt="" />
            </MainImages>
          );
        })}

        <div className="btns">
          <button onClick={() => setId2(id2 > 0 ? id2 - 1 : id2)}>prev</button>
          <button
            onClick={() => setId2(id2 === images.length - 1 ? id2 : id2 + 1)}
          >
            next
          </button>
        </div>
      </div> */}
    </>
  );
}
