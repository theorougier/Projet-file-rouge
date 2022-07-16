import CustomButton from "../../component/CustomButton.js";
import useApi from "../../hook/useApi.js";

function Preferences() {
  const { apiList } = useApi();
  const styles = ownStyles();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>1/2</h1>
      <h1 style={styles.title}>
        Pour que nous puissions vous proposer un contenu adapté, dites nous les
        sujets que vous aimez
      </h1>
      <div style={styles.buttons}>
        {apiList.map((value, index) => (
          <CustomButton key={index} label={value.name} />
        ))}
      </div>
    </div>
  );
}

const ownStyles = () => ({
  container: { padding: "40px 20px", height: "100%" },
  title: {
    color: "white",
    fontFamily: "Rubik",
    fontSize: "32px",
    textAlign: "center",
  },
  buttons: { display: "flex", flexDirection: "column", gap: "16px" },
});

export default Preferences;
