import React, { Dispatch, FC, SetStateAction, useState } from "react";

interface PopUpProps {
  isActivePopUP: boolean;
  setIsActivePopUP: Dispatch<SetStateAction<boolean>>;
}

export const PopUp: FC<PopUpProps> = ({ isActivePopUP, setIsActivePopUP }) => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActivePopUP(false);
  };

  return (
    <div
      className={
        isActivePopUP ? "wrapper-popup popup_active_wrapper" : "wrapper-popup"
      }
    >
      <div className={isActivePopUP ? "popup popup_active" : "popup"}>
        <button className="close-popup" onClick={onClose}></button>
        <h1 className="popup-h">Дякую що надали свої дані!</h1>
        <p className="popup-p">
          Наші представники звʼяжуться з вами найбличим часом!
        </p>
      </div>
    </div>
  );
};
