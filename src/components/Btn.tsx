import React, { FC, ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  className: string;
  id?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Btn: FC<BtnProps> = ({ children, className, id, handleClick }) => {
  return (
    <button
      className={className}
      type="submit"
      id={id}
      onClick={handleClick ? handleClick : null!}
    >
      {children}
    </button>
  );
};
