import React from "react";

function Header(props) {
  const { album } = props;
  return (
    <div id="Header_component">
      <h1>Album {album}</h1>
    </div>
  );
}

export default Header;
