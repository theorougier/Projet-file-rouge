import React from "react";

function CustomButton({ disabled, type, label, end }) {
  const styles = ownStyles(end);

  return (
    <button style={styles.button} type={type} disabled={disabled}>
      {label}
    </button>
  );
}

const ownStyles = (end) => ({
  button: {
    color: "white",
    background: "rgba(0, 0, 0, 0.05)",
    height: "35px",
    border: "none",
    borderRadius: "14px",
    fontSize: "18px",
    cursor: "pointer",
    padding: "0px 20px",
    width: "auto",
    alignSelf: end ? "end" : "",
  },
  title: { color: "white", fontSize: "40px", marginBottom: "20px" },
});

export default CustomButton;
