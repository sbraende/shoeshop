import styles from "./Profile.module.css";
import { getUserContext } from "../../context/userDataContext";
import { auth } from "../../../auth.config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const userData = getUserContext();

  const handleSignout = async () => {
    try {
      await auth.signOut();
      navigate("/signin");
    } catch (error) {
      console.error("Could not sign user out", error);
      alert("Could not sign you out, please try again or contact site admin");
    }
  };

  useEffect(() => {
    if (userData) return;

    navigate("/signin");
  }, [userData]);

  return (
    <div className={styles.profile}>
      <h2>Profile</h2>
      {userData ? (
        <p>
          Hi {userData.firstName} {userData.lastName}. (Not {userData.firstName}{" "}
          {userData.lastName}{" "}
          <button
            className={styles.signOutButton}
            onClick={handleSignout}
            disabled={!userData}
          >
            Logout
          </button>
          )
        </p>
      ) : (
        <p>Redirecting to 'sign in' page</p>
      )}
    </div>
  );
};

export default Profile;
