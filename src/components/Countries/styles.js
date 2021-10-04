import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  content_dark: {
    backgroundColor: "hsl(207, 26%, 17%)",
    minHeight: "100vh",
  },
}));
