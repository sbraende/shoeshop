import styles from "./MyAccount.module.css";
import { auth } from "../../../auth.config";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthContext } from "../../context/authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firestore.config";
const MyAccount = () => {
  const { user } = getAuthContext();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const getCurrentUserData = async () => {
      try {
        const currentUserDoc = await getDoc(doc(db, "users", user.uid));
        setUserData(currentUserDoc.data());
      } catch (error) {
        console.error("Failed to fetch user document:", error);
      }
    };
    getCurrentUserData();
  }, [user]);

  const handleSignout = async () => {
    try {
      await auth.signOut();
      navigate("/signin");
    } catch (error) {
      console.error("Could not sign user out", error);
      alert("Could not sign you out, please try again or contact site admin");
    }
  };

  return (
    <div className={styles.profile}>
      <div className={styles.dashboard}>
        <div className={styles.dashboardNav}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.dashboardButtonActive} ${styles.dashboardButton}`
                : styles.dashboardButton
            }
            to={"/myaccount"}
          >
            <img src="/icons/user.svg" alt="user" />
            <span>My Account</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.dashboardButtonActive} ${styles.dashboardButton}`
                : styles.dashboardButton
            }
            to={"/orders"}
          >
            <img src="/icons/package.svg" alt="orders" />
            <span>Orders</span>
          </NavLink>
          <button className={styles.dashboardButton} onClick={handleSignout}>
            <img src="/icons/log-out.svg" alt="orders" />
            <span>Sign out</span>
          </button>
        </div>
        <div className={styles.myAccountContainer}>
          <h2>MyAccount</h2>
          <div>
            {userData ? (
              <>
                <span>
                  {`Hi ${userData.firstName} ${userData.lastName}. (Not ${userData.firstName} ${userData.lastName} `}
                </span>
                <button
                  className={styles.signOutButton}
                  onClick={handleSignout}
                  disabled={!userData}
                >
                  Logout
                </button>
                <span>)</span>
              </>
            ) : (
              <p>Redirecting to 'sign in' page</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
