import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.becomeMember}>
          <h3 className={styles.title}>BECOME MEMBER</h3>
          <p>
            Get the best offers straight to your email. Get invited to event and
            gather points.
          </p>
          <div className={styles.footerButtons}>
            <Link className={styles.footerButton}>Sign up</Link>
            <Link className={styles.footerButton}>Log in</Link>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <h3 className={styles.title}>Links</h3>
          <div className={styles.linkGroups}>
            <Link className={styles.links}>About Stride Labs</Link>
            <Link className={styles.links}>FAQ</Link>
            <Link className={styles.links}>Social</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
