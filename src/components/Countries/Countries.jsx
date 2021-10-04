import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import Country from "./Country/Country";
import axios from "axios";

import useStyles from "./styles";
import Search from "../Search/Search";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const loaderCSS = css`
  margin: 0 auto;
`;

const Countries = ({ mode }) => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const regionHandleChange = (event) => {
    setRegion(event.target.value);
  };

  const inputHandleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then((res) => {
      const data = res.data;
      data.sort((a, b) => {
        if (
          a.name.common.toLocaleLowerCase() < b.name.common.toLocaleLowerCase()
        ) {
          return -1;
        }
        if (
          a.name.common.toLocaleLowerCase() > b.name.common.toLocaleLowerCase()
        ) {
          return 1;
        }
        return 0;
      });
      setCountries(data);
      setLoading(false);
    });
  }, []);

  const filteredCountries = countries.filter((country) => {
    return (
      country.region.includes(region) &&
      country.name.official.toLowerCase().includes(input.toLocaleLowerCase())
    );
  });

  return (
    <main className={mode ? classes.content : classes.content_dark}>
      {/* <div className={classes.toolbar} /> */}
      <Container maxWidth="xl">
        <Search
          regionHandleChange={regionHandleChange}
          inputHandleChange={inputHandleChange}
          mode={mode}
        />
        <Grid container justifyContent="flex-start" spacing={4}>
          <BeatLoader
            loading={loading}
            css={loaderCSS}
            color="gray"
            size={30}
          />
          {countries &&
            filteredCountries.map((country) => (
              <Grid
                style={{ textDecoration: "none" }}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={country.cca2}
                component={Link}
                to={"/country/" + country.name.common}
              >
                <Country country={country} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.darkMode,
  };
};

export default connect(mapStateToProps)(Countries);
