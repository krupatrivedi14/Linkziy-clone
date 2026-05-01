import styles from "./Logo.module.css";

export default function Logo({ compact = false, onNavigate }) {

  const goHome = () => {
    if (onNavigate) onNavigate('home')
  }

  // Compact logo (only icon)
  if (compact) {
    return (
      <img
        src="/logo-removebg-preview.png"
        alt="Linkziy Logo"
        className={styles.compactLogo}
        onClick={goHome}
        style={{ cursor: "pointer" }}
      />
    );
  }

  // Full logo (icon + text)
  return (
    <div className={styles.logo} onClick={goHome}>
      <img
        src="/logo-removebg-preview.png"
        alt="Linkziy Logo"
        className={styles.logoImg}
      />
      <span className={styles.logoText}>Linkziy</span>
    </div>
  );
}