export default (theme) => ({
  PokeGame: {
    // height: "85vh",
  },
  winLoseMessage: {
    [theme.breakpoints.up("xs")]: { fontSize: "2vh" },
    [theme.breakpoints.up("sm")]: { fontSize: "3vh" },
    fontSize: "3vh",
    textAlign: "center",
    opacity: (props) => (props.isGameStart ? 1 : 0),
  },
});
