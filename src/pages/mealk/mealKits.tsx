import React, { useEffect, useState } from "react";
import Header from "../../components/common/header/header";
import {
  AppBar,
  Icon,
  Toolbar,
  Box,
  Stack,
  Button,
  Hidden,
  ButtonBase,
  SvgIcon,
  Grid,
  Container,
  Popover,
  Divider,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logo from "../../../assets/gbicon.ico";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar";
import MenuCard from "../../components/menuCard";
import RestaurantCard from "../../components/restaurantCard";
import { GeneralHeader } from "../../components/generalHeader";
import { ButtonBox } from "../../components/buttonBox";
import { Numbers } from "../../components/numbers";
import { RoundPhotos } from "../../components/roundPhotos";

const useStyles = makeStyles(() => ({
  menuBox: {
    maxWidth: "20%",
    flexBasis: "20%",
    //height: "290px !important",

    "@media (max-width: 1279.95px)": {
      maxWidth: "25%",
      flexBasis: "25%",
      //height: "242px",
    },

    "@media (max-width: 599.95px)": {
      maxWidth: "50%",
      flexBasis: "50%",
      //height: "242px",
    },

    padding: "12px 12px 24px",
  },
  cardDesign: {
    "@media (min-width:600px)": {
      paddingBottom: "24px",
    },
    "@media (min-width:0px)": {
      paddingBottom: "48px",
    },
    boxSizing: "inherit",
    textAlign: "center",
    maxWidth: "100%",
    maxHeight: "617px",
    height: "100%",
  },
}));
export const MealKits = () => {
  const classes = useStyles();
  interface PeopleProps {
    onSelect: (value: number) => void;
    isSelected: boolean;
  }
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleNumberSelect = (value: number) => {
    setSelectedNumber(value);
  };

  const [filters, setFilters] = useState({});
  const clearSelectedNumber = () => {
    setSelectedNumber(null);
  };

  const clearPeopleComponent = () => {
    const button = document.getElementById(
      "people-button"
    ) as HTMLButtonElement | null;
    if (button) {
      button.textContent = "People";
    }
  };

  const updatePeopleComponent = (number: number | null) => {
    const button = document.getElementById("people-button");
    if (button) {
      button.textContent = number !== null ? `${number} People` : "People";
    }
    setAnchorEl(null);
  };

  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const [anchorElPrice, setAnchorElPrice] = useState<HTMLButtonElement | null>(
    null
  );

  const handlePriceChange = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setSelectedPrice(value);
    }
  };

  const handlePriceOpenPopOver = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElPrice(event.currentTarget);
  };

  const handleAllergiesOpenPopOver = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElAllergies(event.currentTarget);
  };

  const handlePriceClosePopOver = () => {
    setAnchorElPrice(null);
  };

  const clearPriceComponent = (number: Number) => {
    setSelectedPrice(500);
    const button = document.getElementById("pRICE-button");
    if (button) {
      button.textContent = number !== null ? `${selectedPrice} Price` : "Price";
    }
  };

  const updatePriceComponent = () => {
    setAnchorElPrice(null);
  };

  const clearAllergiesComponent = () => {
    setSelectedAllergies([]);
  };

  const [anchorElAllergies, setAnchorElAllergies] =
    useState<HTMLButtonElement | null>(null);

  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const handleAllergiesClosePopover = () => {
    setAnchorElAllergies(null);
  };

  const handleAllergyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const allergyId = event.target.name;
    const isChecked = event.target.checked;

    setSelectedAllergies((prevSelectedAllergies) =>
      isChecked
        ? [...prevSelectedAllergies, allergyId]
        : prevSelectedAllergies.filter((id) => id !== allergyId)
    );
  };

  const handleReset = () => {
    clearAllergiesComponent();
    clearPriceComponent(500);
    clearPeopleComponent();
    updatePeopleComponent(null);
  };

  const allergies = [
    { id: "corn", label: "Corn" },
    { id: "fish", label: "Fish" },
    { id: "sovs", label: "Sovs" },
    { id: "jordbear", label: "Jord Bear" },
    { id: "peanut", label: "Peanut" },
    { id: "shellfish", label: "Shell Fish" },
    { id: "soy", label: "Soy" },
    { id: "wheat", label: "Wheat" },
    { id: "treenut", label: "Tree Nut" },
    { id: "celery", label: "Celery" },
    { id: "mustard", label: "Mustard" },
    { id: "sesameseeds", label: "Sesame Seeds" },

    // Add more allergies here
  ];

  return (
    <>
      <GeneralHeader />

      <Box
        sx={{
          marginTop: "88px",
        }}
      >
        <Container
          sx={{
            padding: "0px",
            "@media (min-width:600px)": {
              paddingLeft: "24px",
              paddingRight: "24px",
            },
            "@media (min-width:1620px)": {
              maxWidth: "1620px",
            },
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              "@media (min-width:1280px)": {
                paddingLeft: "72px",
                paddingRight: "72px",
              },
              "@media (min-width:960px)": {
                paddingLeft: "56px",
                paddingRight: "56px",
                paddingBottom: "96px",
              },
              "@media (min-width:600px)": {
                paddingLeft: "40px",
                paddingRight: "40px",
              },
              "@media (min-width:0px)": {
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingBottom: "80px",
              },
              "@media (min-width: 1620px)": {
                paddingLeft: "148px",
                paddingRight: "148px",
              },
            }}
          >
            <Box
              sx={{
                paddingTop: "24px",
                paddingBottom: "24px",
                "@media (min-width:600px)": {
                  paddingTop: "24px",
                },
                "@media (min-width:0px)": {
                  paddingTop: "16px",
                },
                textAlign: "initial",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  letterSpacing: "0.010070em",
                  fontSize: "32px",
                  fontFamily: "EB Garamind",
                  fontWeight: "normal",
                  lineHeight: "36px",
                }}
              >
                Meal kits in your area
              </Typography>
            </Box>

            <Box
              sx={{
                margin: "auto 0px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  id="people-button"
                  sx={{
                    height: "48px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#484848 !important",
                    borderRadius: "20px",
                    borderColor: "#676767",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    letterSpacing: "0.02em",
                    outline: "none",
                    marginRight: "12px",
                  }}
                  onClick={handleOpenPopOver}
                >
                  {selectedNumber !== null
                    ? `${selectedNumber} People`
                    : "People"}
                </Button>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  // onClose={handleClosePopover}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <Box
                    sx={{
                      width: "512px",
                    }}
                  >
                    <Box
                      sx={{
                        paddingTop: "8px",
                        paddingBottom: "24px",
                        cursor: "pointer",
                        fontSize: "12px",
                        "@media (min-width:600px)": {
                          paddingLeft: "32px",
                          paddingRight: "32px",
                        },
                        "@media (min-width:0px)": {
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        },
                      }}
                    >
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexWrap: "wrap",
                          boxSizing: "border-box",
                        }}
                      >
                        <Box
                          sx={{
                            paddingTop: "24px",
                            paddingBottom: "12px",
                            textAlign: "initial",
                            justifyContent: "center",
                          }}
                        >
                          How many people?
                        </Box>
                      </Grid>
                      <Box
                        sx={{
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          flexDirection: "row !important",
                          display: "flex",
                        }}
                      >
                        <Numbers
                          value={1}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={2}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={3}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={4}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={5}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                      </Box>

                      <Box
                        sx={{
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          flexDirection: "row !important",
                          display: "flex",
                          paddingTop: "2px",
                        }}
                      >
                        <Numbers
                          value={6}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={7}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={8}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={9}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                        <Numbers
                          value={10}
                          onSelect={handleNumberSelect}
                          selectedNumber={selectedNumber}
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "16px 24px",
                        justifyContent: "space-between",
                      }}
                    >
                      <ButtonBox
                        buttonColor="transparent"
                        textColor="#2A2A2A"
                        textFontFamily="Lato"
                        buttonText="CLEAR"
                        linkto=""
                        onButtonClick={() => clearPeopleComponent}
                      />

                      <ButtonBox
                        buttonColor="#f24412"
                        textColor="#ffffff"
                        textFontFamily="Lato"
                        buttonText="SAVE"
                        linkto=""
                        onButtonClick={() =>
                          updatePeopleComponent(selectedNumber as number)
                        }
                      />
                    </Box>
                  </Box>
                </Popover>
                <Button
                  id="price-button"
                  sx={{
                    height: "48px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#484848 !important",
                    borderRadius: "20px",
                    borderColor: "#676767",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    letterSpacing: "0.02em",
                    outline: "none",
                    marginRight: "12px",
                  }}
                  onClick={handlePriceOpenPopOver}
                >
                  {selectedPrice !== null ? `${selectedPrice} kr` : "Price"}
                </Button>

                <Popover
                  open={Boolean(anchorElPrice)}
                  anchorEl={anchorElPrice}
                  // onClose={handleClosePopover}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    sx: {
                      opacity: 1,
                      transform: "none",
                      transition:
                        "opacity 269ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 179ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      top: "224px",
                      left: "16px",
                      transformOrigin: "197.525px 0px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "512px",
                      boxSizing: "inherit",
                    }}
                  >
                    <Box
                      sx={{
                        paddingTop: "32px",
                        paddingBottom: "32px",
                        "@media (min-width:0px)": {
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        },
                        "@media (min-width:600px)": {
                          paddingLeft: "16px",
                          paddingRight: "16px",
                        },
                        "@media (min-width:960px)": {
                          paddingLeft: "32px",
                          paddingRight: "32px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          paddingTop: "4px",
                          paddingBottom: "24px",
                        }}
                      >
                        <Typography>Price Range</Typography>
                      </Box>
                      <Grid
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexWrap: "wrap",
                          boxSizing: "border-box",
                        }}
                      >
                        <Box
                          sx={{
                            paddingBottom: "18.4px",
                          }}
                        >
                          <Typography>0 - {selectedPrice} kr</Typography>
                        </Box>
                        <Slider
                          value={selectedPrice || 0}
                          min={0}
                          max={1000}
                          step={1}
                          onChange={handlePriceChange}
                          aria-labelledby="price-range-slider"
                        />
                      </Grid>
                    </Box>
                    <Box>
                      <Divider
                        sx={{
                          backgroundColor: "#f2f2f2",
                          border: "none",
                          height: "1px",
                        }}
                      ></Divider>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "16px 24px",
                        justifyContent: "space-between",
                      }}
                    >
                      <ButtonBox
                        buttonColor="transparent"
                        textColor="#2A2A2A"
                        textFontFamily="Lato"
                        buttonText="CLEAR"
                        linkto=""
                        onButtonClick={() => clearPriceComponent}
                      />

                      <ButtonBox
                        buttonColor="#f24412"
                        textColor="#ffffff"
                        textFontFamily="Lato"
                        buttonText="SAVE"
                        linkto=""
                        onButtonClick={() => updatePriceComponent()}
                      />
                    </Box>
                  </Box>
                </Popover>
                <Button
                  id="allergies-button"
                  sx={{
                    height: "48px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#484848 !important",
                    borderRadius: "20px",
                    borderColor: "#676767",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    letterSpacing: "0.02em",
                    outline: "none",
                    marginRight: "12px",
                  }}
                  onClick={handleAllergiesOpenPopOver}
                >
                  Allergies
                </Button>
                <Popover
                  open={Boolean(anchorElAllergies)}
                  anchorEl={anchorElAllergies}
                  onClose={handleAllergiesClosePopover}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    sx: {
                      opacity: 1,
                      transform: "none",
                      transition:
                        "opacity 269ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 179ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      top: "224px",
                      left: "16px",
                      transformOrigin: "197.525px 0px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "512px",
                      paddingTop: "16px",
                      paddingBottom: "16px",
                      backgroundColor: "rgb(2555,255,255)",
                      "@media (min-width:600px)": {
                        paddingLeft: "32px",
                        paddingRight: "32px",
                      },
                      "@media (min-width:0px)": {
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        paddingTop: "16px",
                        paddingBottom: "24px",
                      }}
                    >
                      <Typography>Check off your allergies</Typography>
                    </Box>
                    <Grid
                      sx={{
                        width: "100%",
                        // display: "flex",
                        flexWrap: "wrap",
                        boxSizing: "border-box",
                      }}
                    >
                      <FormGroup>
                        <Grid container spacing={2}>
                          {allergies.map((allergy) => (
                            <Grid item key={allergy.id} xs={12} sm={5}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={selectedAllergies.includes(
                                      allergy.id
                                    )}
                                    onChange={handleAllergyChange}
                                    name={allergy.id}
                                  />
                                }
                                label={allergy.label}
                                sx={{
                                  display: "flex",
                                  "& .css-mhc70k-MuiGrid-root .MuiGrid-item": {
                                    margin: 0,
                                    boxSizing: "border-box",
                                    padding: "8px",
                                  },
                                  "& .MuiGrid-grid-sm-6": {
                                    flexGrow: 0,
                                    maxWidth: "50%",
                                    flexBasis: "50%",
                                    padding: "8px",
                                  },
                                  "& .MuiGrid-grid-xs-12": {
                                    flexGrow: 0,
                                    maxWidth: "100%",
                                    flexBasis: "100%",
                                    padding: "8px",
                                  },
                                  "& .MuiGrid-item": {
                                    margin: "0px",
                                    boxSizing: "border-box",
                                    padding: "8px",
                                  },
                                }}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </FormGroup>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "16px 24px",
                      justifyContent: "space-between",
                    }}
                  >
                    <ButtonBox
                      buttonColor="transparent"
                      textColor="#2A2A2A"
                      textFontFamily="Lato"
                      buttonText="CLEAR"
                      linkto=""
                      onButtonClick={clearAllergiesComponent}
                    />

                    <ButtonBox
                      buttonColor="#f24412"
                      textColor="#ffffff"
                      textFontFamily="Lato"
                      buttonText="SAVE"
                      linkto=""
                      onButtonClick={() => handleAllergiesClosePopover}
                    />
                  </Box>
                </Popover>

                <Button
                  id="reset-button"
                  sx={{
                    height: "48px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#484848 !important",
                    borderRadius: "20px",
                    borderColor: "#676767",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    letterSpacing: "0.02em",
                    outline: "none",
                    marginRight: "12px",
                  }}
                  onClick={handleReset}
                >
                  Reset Filters
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                "@media (min-width:600px)": {
                  marginBottom: "24px",
                },
                "@media (min-width:960px)": {
                  marginTop: "32px",
                  marginBottom: "60px",
                },
                "@media (min-width:0px)": {
                  marginTop: "0px",
                  marginBottom: "8px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  justifyContent: "space-between",
                  boxSizing: "inherit",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    overflowX: "auto",
                    position: "relative",
                    justifyContent: "space-between",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                      height: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#888",
                      borderRadius: "4px",
                    },
                    paddingTop: "10px",
                    paddingBottom: "16px",
                  }}
                >
                  <RoundPhotos
                    imageUrl="https://www.gatherbox.dk/static/media/chicken.543fa350.png"
                    cuisine="Chicken"
                  />
                  <RoundPhotos
                    imageUrl="https://www.gatherbox.dk/static/media/indian.2dc04227.png"
                    cuisine="Indian"
                  />
                  <RoundPhotos
                    imageUrl="	https://www.gatherbox.dk/static/media/nordic.f7e157f8.png"
                    cuisine="Nordic"
                  />
                  <RoundPhotos
                    imageUrl="	https://www.gatherbox.dk/static/media/meat.2a587fbe.png"
                    cuisine="Meat"
                  />
                  <RoundPhotos
                    imageUrl="https://www.gatherbox.dk/static/media/lunch.dac3068d.png"
                    cuisine="Lunch"
                  />
                  <RoundPhotos
                    imageUrl="https://www.gatherbox.dk/static/media/lunch.dac3068d.png"
                    cuisine="Pasta"
                  />
                  <RoundPhotos
                    imageUrl="	https://www.gatherbox.dk/static/media/pasta.b57abceb.png"
                    cuisine="Vegetarian"
                  />
                  <RoundPhotos
                    imageUrl="https://www.gatherbox.dk/static/media/lunch.dac3068d.png"
                    cuisine="Pasta"
                  />
                  <RoundPhotos
                    imageUrl="	https://www.gatherbox.dk/static/media/pasta.b57abceb.png"
                    cuisine="Vegetarian"
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "12px",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "EB Garamond",
                    fontWeight: "normal",
                    lineHeight: "32px",
                  }}
                >
                  Meal kits in your area
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  marginLeft: "-12px",
                  marginRight: "-12px",
                }}
              >
                <Box className={classes.menuBox}>
                  <MenuCard
                    dishName="Risotto"
                    distance="64"
                    imageSrc="https://gatherbox.appspot.com.storage.googleapis.com/mealkits/ris8-classico--risotto-/thumbnail.png"
                    restaurantName="RIS8"
                  />
                </Box>
                <Box className={classes.menuBox}>
                  <MenuCard
                    dishName="La Carbonara 2.0"
                    distance="59"
                    imageSrc="	https://gatherbox.appspot.com.storage.googleapis.com/mealkits/l-altro-la-carbonara/thumbnail.png"
                    restaurantName="L'ALTRO"
                  />
                </Box>
                <Box className={classes.menuBox}>
                  <MenuCard
                    dishName="Margarita Pizza"
                    distance="319"
                    imageSrc="	https://gatherbox.appspot.com.storage.googleapis.com/mealkits/mamemi-margarita-pizza/tn-image.jpg"
                    restaurantName="MaMeMi"
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "12px",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "EB Garamond",
                    fontWeight: "normal",
                    lineHeight: "32px",
                  }}
                >
                  Newest additions
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  marginLeft: "-12px",
                  marginRight: "-12px",
                }}
              >
                <Box className={classes.menuBox}>
                  <MenuCard
                    dishName="Risotto"
                    distance="64"
                    imageSrc="https://gatherbox.appspot.com.storage.googleapis.com/mealkits/ris8-classico--risotto-/thumbnail.png"
                    restaurantName="RIS8"
                  />
                </Box>
                <Box className={classes.menuBox}>
                  <MenuCard
                    dishName="La Carbonara 2.0"
                    distance="59"
                    imageSrc="	https://gatherbox.appspot.com.storage.googleapis.com/mealkits/l-altro-la-carbonara/thumbnail.png"
                    restaurantName="L'ALTRO"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MealKits;
