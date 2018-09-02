import React from "react";
import Card from "./card";

const LevelList = ({ levels }) => {
  const levelArray = levels.map((level, i) => {
    return (
      <div key={i}>
        <Card id={level._id} title={level.title} descriptors={level.descriptors} monthly={level.monthly} annual={level.annual} />;
      </div>
    );
  });

  return (
    <div>
      { levelArray }
    </div>
  );
};

export default LevelList;
