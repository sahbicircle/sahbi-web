import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./Logo.module.scss";

import logoSvgLight from "../../assets/logo/logo sahbi noir2.svg";
import logoSvgDark from "../../assets/logo/logo sahbi1.svg";

export default function Logo({ asLink = true, className = "" }) {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? logoSvgDark : logoSvgLight;

  const img = <img src={logoSrc} alt="Sahbi" className={styles.logo} />;

  return asLink ? <Link to="/" className={`${styles.link} ${className}`}>{img}</Link> : img;
}
