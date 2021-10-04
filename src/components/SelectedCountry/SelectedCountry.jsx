import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import styled from "styled-components";

import useStyles from "./styles";

const MainWrapper = styled.main`
  background: ${(props) => (props.mode ? "#f5f5f5" : "hsl(207, 26%, 17%)")};
  color: ${(props) => (props.mode ? "black" : "#fff")};
  min-height: ${(props) => (props.mode ? "auto" : "90.8vh")};
  padding-top: 2em;
  padding: 24px;
`;

const Wrapper = styled.div`
  font-family: roboto;
  margin-top: 4em;
  display: flex;
  gap: 5em;

  @media (max-width: 724px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const FlagWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 700px;
    min-width: 200px;
    max-width: 500px;
    width: 100%;
  }
`;

const CountryWrapper = styled.div`
  padding: 2em 0;
  h2 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  span {
    font-weight: 400;
  }
`;

const CountryDetails = styled.div`
  margin: 2em 0 4em 0;
  display: flex;
  gap: 6em;
  font-weight: 600;
  line-height: 1.7;
  @media (max-width: 1000px) {
    gap: 2em;
    flex-direction: column;
  }
`;

const BorderCountries = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  span {
    margin-left: 20px;
  }

  @media (max-width: 724px) {
    flex-direction: column;
    align-items: flex-start;
    span {
      margin-right: 8px;
      margin-left: 0px;
    }
  }
`;

const SelectedCountry = ({ mode }) => {
  const [country, setCountry] = useState(null);
  const [nativeLang, setNativeLang] = useState([]);

  const classes = useStyles();
  let { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://restcountries.com/v3/name/${name}?fullText=true`
      );
      const country = await data.json();
      const val = Object.values(country[0].languages);
      setNativeLang(val);

      setCountry(country[0]);
    };
    fetchData();
  }, [name]);

  let curr;
  let native;
  if (country) {
    for (let key in country.currencies) {
      curr = country.currencies[key].name;
    }
    for (let key in country.name.nativeName) {
      native = country.name.nativeName[key].common;
    }
  }

  let dMode = mode ? 1 : 0;

  return (
    <MainWrapper mode={dMode}>
      <Button
        component={Link}
        to={"/"}
        variant="contained"
        color="secondary"
        className={mode ? classes.button : classes.button_dark}
        startIcon={<KeyboardBackspaceIcon />}
      >
        Back
      </Button>
      {country && (
        <Wrapper>
          <FlagWrapper>
            <img src={country.flags[0]} alt="flag" />
          </FlagWrapper>
          <CountryWrapper>
            <h2>{country.name.common}</h2>
            <CountryDetails>
              <div>
                <h5>
                  Native Name: <span>{native}</span>
                </h5>
                <h5>
                  Population: <span>{country.population}</span>
                </h5>
                <h5>
                  Region: <span>{country.region}</span>
                </h5>
                <h5>
                  Sub Region: <span>{country.subregion}</span>
                </h5>
                <h5>
                  Capital:{" "}
                  <span>{country.capital ? country.capital[0] : null}</span>
                </h5>
              </div>
              <div>
                <h5>
                  Top Level Domain: <span>{country.tld[0]}</span>
                </h5>
                <h5>
                  Currencies: <span>{curr}</span>
                </h5>
                <h5>
                  Languages:
                  {nativeLang &&
                    nativeLang.map((lang, index) => {
                      return (
                        <span style={{ marginLeft: "5px" }} key={index}>
                          {lang}
                        </span>
                      );
                    })}
                </h5>
              </div>
            </CountryDetails>
            <BorderCountries>
              <div>
                <h5 style={{ marginBottom: "10px" }}>Border Countries:</h5>
              </div>
              <div>
                {country.borders &&
                  country.borders.map((border) => {
                    return (
                      <span key={border}>
                        <Paper
                          elevation={2}
                          style={{
                            display: "inline-block",
                            padding: "4px 30px",
                            marginBottom: "10px",
                          }}
                          className={mode ? classes.paper : classes.paper_dark}
                        >
                          {border}
                        </Paper>
                      </span>
                    );
                  })}
              </div>
            </BorderCountries>
          </CountryWrapper>
        </Wrapper>
      )}
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.darkMode,
  };
};

export default connect(mapStateToProps)(SelectedCountry);
