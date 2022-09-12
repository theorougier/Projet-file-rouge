import CustomButton from "../../component/CustomButton.js";
import useApi from "../../hook/useApi.js";
import { Link } from "react-router-dom";

function Preferences() {
  const { apiList } = useApi();
  const styles = ownStyles();

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Pour que nous puissions vous proposer un contenu adapté, dites nous
          les sujets que vous aimez
        </h1>
        <div style={styles.buttons}>
          {apiList.map((value, index) => (
            <CustomButton key={index} label={value.name} fullWidth />
          ))}
        </div>
        <Link to="/getContent" style={styles.link}>
          <CustomButton next end />
        </Link>
      </div>
    </div>
  );
}

const ownStyles = () => ({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  container: {
    padding: "40px 20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "700px",
  },
  title: {
    color: "white",
    fontFamily: "Rubik",
    fontSize: "32px",
    textAlign: "center",
  },
  buttons: { display: "flex", flexDirection: "column", gap: "16px" },
  link: { alignSelf: "end" },
});

export default Preferences;
