import React, { Fragment } from "react";
import CourseItem from "./CourseItem";
import Card from "../Card";

function CourseListCard({ title, items, onFavorite }) {
  // const [course1, course2, course3] = items;

  const lastIndex = items.length - 1;

  return (
    <>
      <Card title={title}>
        <div className="courses">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <CourseItem {...item} onFavorite={onFavorite} />
              {index !== lastIndex && <hr className="divider" />}
            </Fragment>
          ))}
        </div>
      </Card>
      {/* <div className="card">
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem {...course1} />
          <CourseItem {...course2} />
          <CourseItem {...course3} />
        </div>
      </div>
    </div> */}
    </>
  );
}

export default CourseListCard;
