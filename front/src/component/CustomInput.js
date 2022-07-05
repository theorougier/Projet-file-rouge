import React from "react";

function CustomInput({ title, type, name, onChange, onBlur, value }) {
  const styles = ownStyles();

  return (
    <input
      style={styles.input}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      defaultValue="test"
    />
  );
}

const ownStyles = () => ({
  input: {
    color: "white",
    background: "rgba(0, 0, 0, 0.05)",
    height: "50px",
    border: "none",
    borderRadius: "20px",
    fontSize: "18px",
  },
  title: { color: "white", fontSize: "40px", marginBottom: "20px" },
});

export default CustomInput;
