import React from "react";
import Card from "./card";

const LevelList = ({ levels }) => {
  const levelArray = levels.map((level) => {
    return (
      <Card key={level.title} id={level._id} title={level.title} descriptors={level.descriptors} monthly={level.monthly} annual={level.annual} />
    );
  });

  return (
    <div>
      { levelArray }
    </div>
  );
};

export default LevelList;
