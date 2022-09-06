import React from "react";

function OpacityCard({ children, title }) {
  const styles = ownStyles();

  return (
    <div style={styles.card}>
      <span style={styles.title}>{title}</span>
      <div style={styles.children}>{children}</div>
    </div>
  );
}

const ownStyles = () => ({
  card: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50px",
    padding: "50px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "85%",
    maxWidth: "700px",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "20px",
    fontFamily: "'Rubik', sans-serif",
  },
  children: {
    width: "90%",
    maxWidth: "450px",
  },
});

export default OpacityCard;
