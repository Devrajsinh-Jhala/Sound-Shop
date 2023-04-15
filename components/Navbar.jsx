import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
// import { SignIn, SignOutButton, useUser } from "@clerk/clerk-react";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const user = useUser();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>AgriRent</Link>
      </p>

      <div className="navbar-inner">
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
