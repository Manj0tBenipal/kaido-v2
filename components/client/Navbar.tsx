"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, ChangeEvent } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import NavSidebar from "./NavSidebar";
interface SearchForm {
  name: string;
}
export default function Navbar({ children }: { children: React.ReactNode }) {
  //Searching anime by name field's value
  const [searchForm, setSearchForm] = useState<SearchForm>({ name: "" });
  //Screen width used to keep track of the screen size to change the width of the elements
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  //Search bar visibility on small screen devices as it is not always visible in navbar
  const [floatSearchIsVisible, setFloatSearchIsVisible] =
    useState<boolean>(false);
  //navbar's background color change on scroll
  const [pageIsScrolled, setPageIsScrolled] = useState<boolean>(false);
  //Navbar's sidebar visibility
  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(false);

  //Search bar state updater
  function handleSearchForm(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchForm({ name: value });
  }

  //Runs only after the first render
  useEffect(() => {
    //updates the width state
    function handleChange() {
      setScreenWidth(window.innerWidth);
    }
    const listener: any = window.addEventListener("resize", handleChange);
    return () => window.removeEventListener(listener, handleChange);
  }, []);
  return (
    <>
      <nav
        className={`navigation-bar a-center d-flex ${
          pageIsScrolled ? "dark" : "transparent"
        } trans-03`}
      >
        <div className="menu-group a-center d-flex">
          <FaBars
            size={20}
            className="burger-icon trans-05"
            onClick={() => setSidebarIsVisible(true)}
          />
          <div className="logo-wrapper a-center d-flex">
            <Link href="/">
              <Image
                src="/media/logo.png"
                className="logo"
                alt="logo"
                height={40}
                width={150}
                onClick={() => scrollTo({ top: 0 })}
              />
            </Link>
          </div>
        </div>
        <div className="search-wrapper">
          <input
            style={
              pageIsScrolled
                ? { backgroundColor: "var(--grey-dark)", color: "var(--theme)" }
                : { backgroundColor: "white", color: "black" }
            }
            type="text"
            className="search-text f-poppins  trans-03"
            placeholder="Search anime..."
            name="name"
            value={searchForm?.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchForm(e)}
          />
          <Link href={`/search?name=${searchForm?.name}&parameter=title`}>
            <FaSearch
              onClick={() => {
                window.scrollTo({ top: 0 });
                setSearchForm({ name: "" });
              }}
              className="search-icon search-icons trans-03"
              size={20}
              style={
                pageIsScrolled
                  ? {
                      color: "var(--theme)",
                    }
                  : { color: "black" }
              }
            />
          </Link>
        </div>
        {/* 
        These children are server rendered components which require them to be passed as a prop to 
        a client rendered component
         */}
        {children}
        <div className="user-profile-nots a-center j-center d-flex trans-c-03">
          {screenWidth < 1300 && (
            <FaSearch
              onClick={() => {
                setFloatSearchIsVisible((prev) => !prev);
              }}
            />
          )}
        </div>
      </nav>
      <NavSidebar
        sidebarIsVisible={sidebarIsVisible}
        setSidebarIsVisible={setSidebarIsVisible}
      />
    </>
  );
}
