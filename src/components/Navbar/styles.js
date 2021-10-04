import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    background: "#fff",
    color: "#000000",
  },
  appBar_dark: {
    background: "hsl(209, 23%, 22%)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 8px -8px",
    padding: "1.5em",
  },
  title: {
    fontWeight: 600,
    fontSize: "1.8rem",
    cursor: "pointer",
    "@media (max-width: 500px)": {
      fontSize: "1.1rem",
    },
  },
  darkMode: {
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    fontSize: "1em",
    cursor: "pointer",
    "@media (max-width: 500px)": {
      fontSize: ".8rem",
    },
  },
  icon: {
    marginRight: "6px",
    marginTop: "-2px",
    fontSize: "17px",
    "@media (max-width: 500px)": {
      fontSize: "14px",
    },
  },
}));
