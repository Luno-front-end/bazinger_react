import React, { FC, ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

export const Alert: FC<AlertProps> = ({ children }) => {
  return <div className="alert">{children}</div>;
};
