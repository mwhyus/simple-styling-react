import React from "react";
import {
  StyledContainer,
  StyledTextHeading,
  flex,
  dimension
} from "../styles/common";

function HomeScreen() {
  return (
    <React.Fragment>
      <div style={StyledContainer}>
        <div className="title">
          <h1>TentangSaya</h1>
        </div>

        <div className="image-profile">
          <p>Image profile</p>
        </div>
      </div>

      {/* sdfsdofosdfsko */}
      <div className="portfolio-links" style={StyledContainer}>
        <h1 style={StyledTextHeading}>Portfolio</h1>
        <div style={{ ...dimension("100%", 1), backgroundColor: "black" }} />

        <div
          style={{
            ...flex("row", "space-around", "center", "wrap"),
            marginTop: 24
          }}
        >
          <div>
            <div
              style={{
                ...dimension(90, 90),
                ...flex("row", "center", "center"),
                overflow: "hidden"
              }}
            >
              <img src="https://via.placeholder.com/150" alt="gitlab" />
            </div>
            <p>Github</p>
          </div>

          <div>
            <div
              style={{
                ...dimension(90, 90),
                ...flex("row", "center", "center"),
                overflow: "hidden"
              }}
            >
              <img src="https://via.placeholder.com/150" alt="gitlab" />
            </div>
            <p>Gitlab</p>
          </div>
        </div>
      </div>

      {/* Social media Section */}
      <div style={StyledContainer}>Social Media</div>
    </React.Fragment>
  );
}

export default HomeScreen;
