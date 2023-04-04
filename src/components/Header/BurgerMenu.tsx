import React, { Dispatch, FC, SetStateAction } from "react";

interface BurgerMenuProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ isActive, setIsActive }) => {
  const test = () => {
    const body = document.querySelector("body");
    body!.classList.toggle("block-scroll");

    setIsActive(!isActive);
  };

  return (
    <button type="button" className="wrapper-burger" onClick={test}>
      <span className={isActive ? "burger close" : "burger "}></span>
    </button>
  );
};
