import styles from "./ResponsiveCard.module.css";

export default function ResponsiveCard() {
  return (
    <>
      <div className={styles.responsiveCard}>
        <h2 className={styles.responsiveCardTittle}>ResponsiveCard</h2>
        <p className={styles.responsiveCardText}>
          This is a responsive card component. Resize the browser window to see
        </p>
      </div>
    </>
  );
}
