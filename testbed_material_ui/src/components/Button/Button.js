import { React } from "react";

import { Button, Box, Container, Divider, IconButton } from "@material-ui/core";
import { Delete, Send, CloudUpload, Search } from "@material-ui/icons";

import { useStyles } from "./Button.style";

const ButtonComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} fixed>
        <Box p={2} display="flex" justifyContent="space-around">
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
        </Box>
        <Divider />
        <Box p={2} display="flex" justifyContent="space-around">
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Box>
        <Divider />
        <Box p={2} display="flex" justifyContent="space-around">
          <Button variant="contained" disableElevation>
            Default
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Primary
          </Button>
          <Button variant="contained" color="secondary" disableElevation>
            Secondary
          </Button>
          <Button variant="contained" disableElevation disabled>
            Disabled
          </Button>
        </Box>
        <Divider />
        <Box p={2} display="flex" justifyContent="space-around">
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </Box>
        <Divider />
        <Box p={2} display="flex" justifyContent="space-around">
          <Button variant="contained" startIcon={<Delete />}>
            Send
          </Button>
          <Button variant="contained" color="primary" startIcon={<Send />}>
            Send
          </Button>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<CloudUpload />}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<Search />} disabled>
            Send
          </Button>
        </Box>
        <Divider />
        <Box p={2} display="flex" justifyContent="space-around">
          <IconButton>
            <Delete></Delete>
          </IconButton>
          <IconButton color="primary">
            <Send></Send>
          </IconButton>
          <IconButton color="secondary">
            <CloudUpload></CloudUpload>
          </IconButton>
          <IconButton disabled>
            <Search></Search>
          </IconButton>
        </Box>
      </Container>
    </div>
  );
};

export default ButtonComponent;
