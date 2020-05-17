export default (theme) => ({
  App: {
    fontFamily: "Comic Sans MS",
  },
  PokemonLogo: {
    display: "block",
    margin: "auto",
    [theme.breakpoints.up("xs")]: { height: "4vh" },
    [theme.breakpoints.up("sm")]: { height: "10vh" },

    padding: "1vh",
    "& img": {
      position: "relative",
      height: "100%",
      margin: "auto",
      display: "block",
    },
  },
  ReplayButton: {
    height: "5vh",
    margin: "auto",
    display: "block",
  },
});
