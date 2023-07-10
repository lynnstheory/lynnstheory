import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2 style={{ color: "black" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                    // fontFamily: "cursive",
                  }}
                >
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <button
                  onClick={() => {
                    alert("Boba fett is the best boba");
                  }}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Hi lynn
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
