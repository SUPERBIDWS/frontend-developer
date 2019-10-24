import React, { useState } from "react";

const AlbumItem = props => {
  const { albumId, id, title, thumbnailUrl, mode, onClick } = props;
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  const onClickHandler = () => {
    if (mode === "album") {
      onClick(albumId);
    } else {
      showModal();
    }
  };

  return (
    <React.Fragment>
      {mode === "image" ? (
        <div
          className="album-modal"
          style={{ display: modal ? "block" : "none" }}
        >
          <button onClick={hideModal}>x</button>
          <div className="modal-img">
            <h2>{title}</h2>
            <img src={thumbnailUrl.replace("150", "600")} />
          </div>
        </div>
      ) : null}
      <div className="Album_component" onClick={onClickHandler}>
        <div className="album-cover">
          <div className="album-label">
            <h3>{mode === "album" ? `Album ${albumId}` : `Picture ${id}`}</h3>
            <p>{albumId}</p>
          </div>
          <img src={thumbnailUrl} alt={`Album ${albumId} cover`} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AlbumItem;
