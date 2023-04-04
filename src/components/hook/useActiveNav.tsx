import React from "react";

export const useActiveNav = () => {
  const scrollToSection = (
    e: any,
    listEl: React.RefObject<HTMLUListElement>
  ) => {
    e.preventDefault();
    const linkEl = e.target;
    const ulElement = listEl.current;
    const linksEl = Array.from(ulElement!.querySelectorAll("li > a"));

    if (linkEl.tagName !== "A") return;

    const attribute = linkEl.getAttribute("href");

    if (attribute === "#") return;

    linksEl.forEach((linkClass) => {
      linkClass!.classList.remove("active-nav");
    });

    linkEl.classList.add("active-nav");

    document.querySelector("" + attribute)!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return { scrollToSection };
};
