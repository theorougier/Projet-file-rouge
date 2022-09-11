import CustomButton from "../../component/CustomButton.js";
import useApi from "../../hook/useApi.js";
import { Link, NavigateFunction } from "react-router-dom";

function Content() {
  const { randomImage } = useApi();
  const styles = ownStyles();

  console.log("randomImage", randomImage);

  return (
    <div style={styles.container}>
      {/* <h1 style={styles.title}>1/2</h1> */}
      <h1 style={styles.title}>Images de chats</h1>
      <img style={styles.img} src={randomImage} alt="cat" />
      <Link to="/getContent" style={styles.link}>
        <CustomButton next end />
      </Link>
    </div>
  );
}

const ownStyles = () => ({
  container: {
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  title: {
    color: "white",
    fontFamily: "Rubik",
    fontSize: "32px",
    textAlign: "center",
  },
  img: { maxHeight: "70%" },
  buttons: { display: "flex", flexDirection: "column", gap: "16px" },
  link: { textAlign: "end" },
});

export default Content;
