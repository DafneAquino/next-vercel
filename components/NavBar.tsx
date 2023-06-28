import React from "react";
import styles from "./NavBar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((menuItem,index)=>{
        return <ActiveLink key={index} text={menuItem.text} link={menuItem.href} />
      })}
      {/* <ActiveLink text="Home" link="/" />
      <ActiveLink text="About" link="/about" />
      <ActiveLink text="Contact" link="/contact" />
      <ActiveLink text="Contact" link="/pricing" /> */}
    </nav>
  );
};
