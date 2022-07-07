import React from "react";

function OpacityCard({ children, title }) {
  const styles = ownStyles();

  return (
    <div style={styles.card}>
      <span style={styles.title}>{title}</span>
      {children}
    </div>
  );
}

const ownStyles = () => ({
  card: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50px",
    padding: "50px 100px",
    display: "flex",
    flexDirection: "column",
    width: "70%",
    maxWidth: "700px",
  },
  title: { color: "white", fontSize: "40px", marginBottom: "20px" },
});

export default OpacityCard;
