import React from "react";
import {BusSkeletonContainer, BusSkeletonItem} from "./style";



const SkeletonComponent = ({ height }) => {
  return (
    <BusSkeletonContainer>
      {Array.from({ length: 15 }).map((item, idx) => (
        <BusSkeletonItem height={height} key={idx} />
      ))}
    </BusSkeletonContainer>
  );
};

export default SkeletonComponent;
