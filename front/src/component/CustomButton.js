import React, { useState } from "react";

function CustomButton({ disabled, type, label, end }) {
  const [isOutline, setIsOutline] = useState(false);
  const styles = ownStyles(isOutline, end);

  return (
    <button
      style={styles.button}
      type={type}
      disabled={disabled}
      onMouseOver={() => setIsOutline(true)}
      onMouseLeave={() => setIsOutline(false)}
    >
      {label}
    </button>
  );
}

const ownStyles = (isOutline, end) => ({
  button: {
    color: !isOutline && "white",
    mixBlendMode: "screen",
    background: isOutline ? "white" : "none",
    height: "48px",
    border: "3px solid white",
    borderRadius: "12px",
    fontSize: "20px",
    fontFamily: "Rubik",
    cursor: "pointer",
    padding: "0px 20px",
    width: "auto",
    alignSelf: end ? "end" : "",
  },
});

export default CustomButton;
