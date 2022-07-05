import React from "react";

function OpacityCard({ children, title }) {
  const styles = ownStyles();

  return (
    <div style={styles.card}>
      <span>{title}</span>
      {children}
    </div>
  );
}

const ownStyles = () => ({
  card: {
    background: "red",
  },
});

export default OpacityCard;
