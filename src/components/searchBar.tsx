import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  IconButton,
  InputBase,
  Paper,
  TextField,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Autocomplete from "@mui/material/Autocomplete";
import { InputProps } from "@mui/material";

interface Option {
  id: number;
  Location: string;
  Code: string;
}

const postalCodes: Option[] = [
  {
    id: 1,
    Location: "Dehradun",
    Code: "240008",
  },
  {
    id: 2,
    Location: "Kullu",
    Code: "175101",
  },
];

// const useStyles = makeStyles(() => ({

//   input: {
//     marginLeft: 1,
//     flex: 1,
//     flexGrow: 1,
//   },
// }));

const SearchBar = () => {
  // const classes = useStyles();
  const [selectedPostalCode, setselectedPostalCode] = useState<Option | null>(
    null
  );
  console.log(selectedPostalCode);

  const getOptionLabel = (option: Option) => option.Location;

  const getOptionSelected = (option: Option, value: Option) =>
    option.Location === value.Location;

  const onChange = (event: React.ChangeEvent<{}>, value: Option | null) => {
    if (value) {
      console.log(`Selected location: ${value.Location}`);
      console.log(`Postal code: ${value.Code}`);
    }
  };

  // const handlePostalCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setselectedPostalCode(event.target.value as string)
  // }

  console.log(postalCodes);

  // const handleSearch = (event:  React.FormEventHandler<HTMLFormElement>) => {
  // event.preventDefault();
  // };
  return (
    // <Paper
    //   component="form"
    //   onSubmit={() => {}}
    //   sx={{
    //     //padding: "2px 4px ",
    //     display: "inline-flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     flexGrow: 1,
    //     margin: "auto",
    //     //marginTop: 50,
    //     borderRadius: "6px",
    //     backgroundColor: "#ffffff",
    //     //position: "absolute",
    //     width: 400,
    //   }}
    //   variant="elevation"
    // >
    //   <IconButton aria-label="map">
    //     <LocationOnIcon />
    //   </IconButton>

    //   <Autocomplete
    //     id="postalCodesBar"
    //     options={postalCodes}
    //     style={{ width: "100%", alignItems: "center" }}
    //     getOptionLabel={getOptionLabel}
    //     isOptionEqualToValue={getOptionSelected}
    //     disableClearable
    //     autoComplete
    //     onChange={(e, value) => console.log(e.target, value.Location)}
    //     // options = {postalCodes.map((option) => <MenuItem key = {option.id}>
    //     //   <span>{option.Location}: </span>
    //     //   <span>{option.Code}</span>
    //     // </MenuItem>)}
    //     renderInput={(params) => (
    //       <TextField
    //         {...params}
    //         label="Enter postal Code"
    //         margin="normal"
    //         variant="standard"
    //         InputProps={{
    //           ...params.InputProps,
    //           type: "search",
    //           style: { marginTop: "0px", flexGrow: 1 },
    //         }}
    //         InputLabelProps={{
    //           style: { color: "red" },
    //         }}
    //         sx={{
    //           "& .MuiOutlinedInput-notchedOutline": {
    //             borderColor: "transparent",
    //           },
    //         }}
    //       />
    //     )}
    //     renderOption={(props, option) => (
    //       <MenuItem key={option.id} {...props}>
    //         {option.Code}
    //       </MenuItem>
    //     )}
    //   />
    // </Paper>
    <Grid
      sx={{
        width: "100%",
        maxWidth: "350px",
        marginLeft: "48px",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        height: "64px",
      }}
    >
      <Grid
        sx={{
          flexGrow: "0",
          maxWidth: "100%",
          height: "64px",
          flexBasis: "100%",
          "& .MuiGrid-item": { margin: 0, boxSizing: "border-box" },
        }}
      >
        <Paper
          component="form"
          onSubmit={() => {}}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            //flexGrow: 1,
            //margin: "auto",
            borderRadius: "6px",
            backgroundColor: "#FDFCFC",
            //width: 400,
            width: "100%",
            boxShadow: "0px -1px #ded1de",
            maxHeight: "64px",
            height: "100%",
            flexDirection: "column",
            //padding: "9px",
          }}
          //variant="elevation"
        >
          <Box
            sx={{
              // padding: "9px",
              // height: "100%",
              // flexWrap: "wrap",
              // postion: "relative",
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                paddingLeft: "9px",
                paddingTop: "9px",
                paddingBottom: "9px",
                height: "0.01em",
              }}
              aria-label="map"
            >
              <LocationOnIcon />
            </IconButton>

            <Autocomplete
              id="postalCodesBar"
              options={postalCodes}
              sx={{
                width: "100%",
                alignItems: "center",
                "& .MuiInputBase-root": {
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                },
                "& .MuiAutocomplete-inputRoot": {
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent", // Customize the color of the outline when focused
                  },
                marginBottom: "6.2px",
              }}
              getOptionLabel={getOptionLabel}
              isOptionEqualToValue={getOptionSelected}
              disableClearable
              autoComplete
              onChange={(e, value) => console.log(e.target, value.Location)}
              // options = {postalCodes.map((option) => <MenuItem key = {option.id}>
              //   <span>{option.Location}: </span>
              //   <span>{option.Code}</span>
              // </MenuItem>)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  margin="normal"
                  variant="standard"
                  InputProps={{
                    ...(params.InputProps as InputProps),
                    endAdornment: null,
                    style: {
                      marginTop: "0px",
                      flexGrow: 1,
                      borderBottom: "none !important",
                      color: "none",
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: "red", // Customize the color of the input label if needed
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderBottom: "none !important",
                      },
                  }}
                  // InputLabelProps={
                  //   {
                  //     // style: { color: "red" },
                  //   }
                  // }
                  // sx={{
                  //   "& .MuiOutlinedInput-notchedOutline": {
                  //     borderColor: "transparent",
                  //   },
                  //   "& .MuiInput-underline:after": {
                  //     borderBottom: "none",
                  //   },
                  // }}
                />
              )}
              renderOption={(props, option) => (
                <MenuItem key={option.id} {...props}>
                  {option.Code}
                </MenuItem>
              )}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchBar;

{
  /* <TextField label = 'Enter Postal Code' select value = {selectedPostalCode} onChange={handlePostalCodeChange} fullWidth>
        <MenuItem value = '90003'>Los Angeles, Oakwood</MenuItem>
        <MenuItem value = '90005'>Los Angeles, Sanford</MenuItem>
        <MenuItem value = '90007'>Los Angeles, Dockweiler</MenuItem>
      </TextField> */
}

{
  /* <InputBase className={classes.input} 
        placeholder="Enter postal code" 
        value = ''
        onChange = {() => {}}
      />
      <IconButton type =  */
}

// import {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Paper, IconButton } from '@mui/material';
// import {SearchIcon} from '@mui/icon-material';
// import { pink, purple } from '@mui/material/colors';
// import { createTheme } from '@mui/material/styles';

// export const SearchBar = () => {
//   return(
//     <Paper
//       component = 'form'
//       onSubmit = { () => {}}
//       sx = {{
//         borderRadius : 10,
//         height: '50px',
//         pt: 50,
//         border : '1px solid #e3e3e3',
//         background: '#fff',
//         boxShadow : 'none',
//         mr : {sm:5},
//         opacity : 1,
//       }}
//     >
//       <input
//         className='search-bar'
//         placeholder='Enter postal code'
//         value = ''
//         onChange = { () => {}}

//       />
//       Enter postal code
//     </Paper>

//   )
// }

// export default SearchBar
