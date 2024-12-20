import React, { useState } from "react";

function HeartIconBtn({ onClick, isFavorite = false }) {
  // function handleFavorite() {
  //   alert(isFavorite ? "좋아요" : "모르겠어요");
  // }


  return (
    <button className="btn" onClick={(e)=> onClick(e)}>
      <img
        className="btn__img"
        src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}
      />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="" />
    </a>
  );
}

export default function CourseItem({
  title,
  id,
  description,
  thumbnail,
  isFavorite,
  link,
  onFavorite,
}) {
  function handleFavorite(e) {
    e.stopPropagation();
    onFavorite(id, !isFavorite);
  }
  function handleItemClick() {
    alert('item click');
    window.open(link, '_blank');
  }
  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}
