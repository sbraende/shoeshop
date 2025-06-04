import styles from "./DashboardLayout.module.css";
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
                ? `${styles.buttonActive} ${styles.button}`
                : styles.button
            }
          >
            <img src="/icons/user.svg" alt="user" />
            <span className={styles.buttonText}>My Account</span>
          </NavLink>
          <NavLink
            to="/myaccount/orders"
            className={({ isActive }) =>
              isActive
                ? `${styles.buttonActive} ${styles.button}`
                : styles.button
            }
          >
            <img src="/icons/package.svg" alt="orders" />
            <span className={styles.buttonText}>Orders</span>
          </NavLink>
          <button className={styles.button} onClick={signOutUser}>
            <img src="/icons/log-out.svg" alt="orders" />
            <span className={styles.buttonText}>Sign out</span>
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
