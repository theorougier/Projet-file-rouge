function Preferences() {
  const styles = ownStyles();

  return (
    <h1 style={styles.title}>
      1/2 Pour que nous puissions vous proposer un contenu adapté, dites nous
      les sujets que vous aimez{" "}
    </h1>
  );
}

const ownStyles = () => ({
  title: {
    color: "white",
    fontFamily: "Rubik",
    fontSize: "32px",
  },
  //   title: { color: "white", fontSize: "40px", marginBottom: "20px" },
});

export default Preferences;
