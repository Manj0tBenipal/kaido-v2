"use client";
import Link from "next/link";
import Actions from "../server/Actions";
import { FaChevronLeft, FaComments } from "react-icons/fa";
import styles from "@/styles/navbar.module.css";

export default function NavSidebar({
  sidebarIsVisible,
  setSidebarIsVisible,
}: {
  sidebarIsVisible: boolean;
  setSidebarIsVisible: Function;
}) {
  return (
    <div
      className={`${styles.sidebar} f-poppins`}
      style={{ zIndex: sidebarIsVisible ? 100 : -1 }}
      onClick={() => setSidebarIsVisible(false)}
    >
      <div
        className={`${styles.list} d-flex`}
        style={{
          transform: sidebarIsVisible
            ? "translateX(250px)"
            : "translateX(-250px)",
        }}
      >
        <div className={`${styles.buttonGroup} d-flex-fd-column`}>
          <div
            className={`d-flex a-center j-center ${styles.close}`}
            style={{ width: "60%" }}
            onClick={() => setSidebarIsVisible()}
          >
            <FaChevronLeft size={12} />
            Close Menu
          </div>
          <Actions isInSidebar={true} />
          <a href="/" className="d-flex a-center j-center">
            <FaComments size={14} />
            Community
          </a>
        </div>

        <div className={styles.linkList}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/grid/filter?name=bypopularity&heading=Most Popular">
                Most Popular
              </Link>
            </li>
            <li>
              <Link href="/grid/type?typeName=movie&heading=Movies">
                Movies
              </Link>
            </li>
            <li>
              <Link href="/grid/type?typeName=tv&heading=TV Series">
                TV Series
              </Link>
            </li>
            <li>
              <Link href="/grid/type?typeName=ova&heading=OVAs">OVAs</Link>
            </li>
            <li>
              <Link href="/grid/type?typeName=ona&heading=ONAs">ONAs</Link>
            </li>
            <li>
              <Link href="/grid/type?typeName=special&heading=Specials">
                Specials
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
