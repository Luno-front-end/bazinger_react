import React, { FC } from "react";

interface HeaderSectionProps {
  textH: string;
  textP: string;
}

export const HeaderSection: FC<HeaderSectionProps> = ({ textH, textP }) => {
  return (
    <div>
      <h2 className="header-gallery">{textH}</h2>
      <p className="text-gallery">{textP}</p>
    </div>
  );
};
