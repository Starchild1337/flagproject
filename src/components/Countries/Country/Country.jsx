import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const Flag = ({ country, mode }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.flags[0]}
          title={country.name.common}
        />
        <CardContent className={mode ? classes.country : classes.country_dark}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={mode ? classes.card_text : classes.card_text_dark}
          >
            {country.name.common}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={mode ? classes.card_text : classes.card_text_dark}
          >
            <span className={classes.span}>Population: </span>
            {country.population}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={mode ? classes.card_text : classes.card_text_dark}
          >
            <span className={classes.span}>Capital: </span>
            {country.capital ? country.capital[0] : null}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={mode ? classes.card_text : classes.card_text_dark}
          >
            <span className={classes.span}>Region: </span>
            {country.region}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.darkMode,
  };
};

export default connect(mapStateToProps)(Flag);
