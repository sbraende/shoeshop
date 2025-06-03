import styles from "./DashboardLayout.module.css";

import { auth } from "../../../auth.config";
import { NavLink, Outlet } from "react-router-dom";
import useSignOut from "../../hooks/useSignOut";

const DashboardLayout = () => {
  const signOutUser = useSignOut();

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <nav className={styles.sidebar}>
          <NavLink
            to="/myaccount"
            end
            className={({ isActive }) =>
              isActive
                ? `${styles.dashboardButtonActive} ${styles.dashboardButton}`
                : styles.dashboardButton
            }
          >
            <img src="/icons/user.svg" alt="user" />
            <span>My Account</span>
          </NavLink>
          <NavLink
            to="/myaccount/orders"
            className={({ isActive }) =>
              isActive
                ? `${styles.dashboardButtonActive} ${styles.dashboardButton}`
                : styles.dashboardButton
            }
          >
            <img src="/icons/package.svg" alt="orders" />
            <span>Orders</span>
          </NavLink>
          <button className={styles.dashboardButton} onClick={signOutUser}>
            <img src="/icons/log-out.svg" alt="orders" />
            <span>Sign out</span>
          </button>
        </nav>
        <main className={styles.dashboardContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
