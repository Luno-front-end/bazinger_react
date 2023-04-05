import React, { FC, useEffect, useRef, useState } from "react";
import { useActiveNav } from "../hook/useActiveNav";
import { BurgerMenu } from "./BurgerMenu";

import { Logo } from "./Logo";

import { itemNavigation } from "../../data/dataComponents";

export const Navigation: FC = () => {
  const listEl = useRef<HTMLUListElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  const { scrollToSection } = useActiveNav();

  useEffect(() => {
    const ulElement = listEl.current;
    const liElements = Array.from(ulElement!.querySelectorAll("li > a"));
    liElements[0].classList.add("active-nav");
  }, []);

  const handlerClick = (e: React.MouseEvent) => {
    scrollToSection(e, listEl);
    setIsActive(false);
  };

  return (
    <nav className="nav-container">
      <div className="container wrapper-nav">
        <Logo />
        <div
          className={
            isActive ? "list-container active-mob-menu" : "list-container "
          }
        >
          <ul className="list-nav" onClick={handlerClick} ref={listEl}>
            {itemNavigation.map((item, i) => (
              <li className="item-nav" key={i}>
                <a
                  href={`#${item.anchor ? item.name.toLocaleLowerCase() : ""}`}
                  className="link-nav"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
      </div>
    </nav>
  );
};
