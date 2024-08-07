import { useContext , useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../assets/styles/header.module.css";
import { navigation } from "../../common/navigations";
import { LanguageContext } from "../../context/LanguageContext";
import { AuthContext } from "../../context/AuthContextProvider";
import { logout } from "../../API/authentication";

export default function Header() {

  const { user, setUser } = useContext(AuthContext);
  const { changeLanguage } = useContext(LanguageContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const showDropdown = () => {
    setDropdownOpen(true);
  };

  const hideDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLanguageChange = (lng) => {
    changeLanguage(lng, hideDropdown);
  };

  const handleLogout = async () => {
    await logout(setUser);
    navigate(navigation.getLogoutUrl());
  };

  return (
    <header>
      <nav className={styles.navigationBar}>
        <ul className={styles.leftNav}>
          <li className={styles.navigations}>
            <Link className={styles.link} to={navigation.getHomeUrl()}>
              <img
                className={styles.logo}
                src="/img/Artboard 2.png"
                alt="homepage"
              />
            </Link>
          </li>
          <li className={styles.navigations}>
            <Link className={styles.link} to={navigation.getAboutUrl()}>
              {("header.about")}
            </Link>
          </li>
          <li className={styles.navigations}>
            <Link className={styles.link} to={navigation.getHardwareBlogUrl()}>
              {("header.forum")}
            </Link>
          </li>
          <li className={styles.navigations}>
            <Link className={styles.link} to={navigation.getFeedBackUrl()}>
              {("header.reviews")}
            </Link>
          </li>
          <li
            className={styles.language}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <Link className={styles.link} to="#">
              {("header.language")}
            </Link>
            {dropdownOpen && (
              <ul className={styles.dropdown}>
                <li onClick={() => handleLanguageChange("en")}>
                  English(EN-ES)
                </li>
                <li onClick={() => handleLanguageChange("bg")}>
                  Български(BG)
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul className={styles.rightNav}>
          {user ? (
            <li className={styles.logout}>
              <Link
                className={styles.link}
                to={navigation.getLogoutUrl()}
                onClick={handleLogout}
              >
                {("header.signOut")}
              </Link>
            </li>
          ) : (
            <>
              <li className={styles.signUp}>
                <Link className={styles.link} to={navigation.getLoginUrl()}>
                  {("header.signIn")}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}