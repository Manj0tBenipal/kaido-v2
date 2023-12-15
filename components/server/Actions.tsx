import { FaRandom, FaComments, FaBroadcastTower } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
export default function Actions({ isInSidebar }: { isInSidebar: boolean }) {
  return (
    <div
      className={`${styles.actions} f-poppins text-light trans-c-03`}
      style={
        isInSidebar
          ? {
              display: "flex",
              background: "var(--dark)",
              marginInline: "0px",
              borderRadius: "0px",
            }
          : {}
      }
    >
      <span>
        <Link
          href="https://aniwatch.to/watch2gether"
          target="_blank"
          rel="noreferrer"
        >
          <FaBroadcastTower size={20} />
          <p>Watch Togather</p>
        </Link>
      </span>
      <span>
        <Link href="/details/random">
          <FaRandom size={20} />
          <p>Random</p>
        </Link>
      </span>
      {!isInSidebar && (
        <span>
          <Link
            href="https://aniwatch.to/community/board"
            target="_blank"
            rel="noreferrer"
          >
            <FaComments size={20} />
            <p>Community</p>
          </Link>
        </span>
      )}
    </div>
  );
}
