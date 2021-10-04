import { makeStyles } from "@material-ui/core";

export default makeStyles({
  button: {
    padding: "6px 24px",
    background: "#fff",
    color: "#000",
    textTransform: "capitalize",
    "&:hover": {
      background: "#E2E2E2",
    },
  },
  button_dark: {
    background: "hsl(209, 23%, 22%)",
  },
  paper: {
    background: "#fff",
  },
  paper_dark: {
    background: "hsl(209, 23%, 22%)",
    color: "#fff",
  },
});
