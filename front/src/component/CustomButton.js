import React, { useState } from "react";

function CustomButton({ disabled, type, label, end, fullWidth, next }) {
  const [isOutline, setIsOutline] = useState(false);
  const styles = ownStyles(isOutline, end, fullWidth);

  return (
    <button
      style={styles.button}
      type={type}
      disabled={disabled}
      onClick={() => setIsOutline(isOutline ? false : true)}
      // onMouseLeave={() => setIsOutline(false)}
    >
      {next ? "Suivant =>" : label}
    </button>
  );
}

const ownStyles = (isOutline, end, fullWidth) => ({
  button: {
    background: isOutline ? "white" : "none",
    color: !isOutline && "white",
    mixBlendMode: "screen",
    minHeight: "48px",
    border: "3px solid white",
    borderRadius: "20px",
    fontSize: "20px",
    fontFamily: "Rubik",
    cursor: "pointer",
    padding: "0px 20px",
    width: fullWidth ? "100%" : "fit-content",
    alignSelf: end ? "end" : "center",
  },
});

export default CustomButton;
