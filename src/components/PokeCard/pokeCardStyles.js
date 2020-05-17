export default (theme) => ({
  PokeCard: {
    textAlign: "center",
    backgroundColor: (props) => (props.isGameStart ? "lightgray" : "white"),
    borderRadius: "7px",
    padding: "0.5vh",
    border: "1px solid",

    boxShadow: "7px 10px 12px -5px rgba(0, 0, 0, 0.56)",
    [theme.breakpoints.up("xs")]: {
      height: "15vh",
      margin: "1vh auto",
      width: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "26vh",
      margin: "auto",
      width: "120px",
    },
    [theme.breakpoints.up("md")]: {
      height: "26vh",
      margin: "auto",
      width: "50%",
      minWidth: "200px",
    },
  },
  PokeNameText: {
    [theme.breakpoints.up("xs")]: { fontSize: "1.5vh" },
    [theme.breakpoints.up("sm")]: { fontSize: "2vh" },
    margin: "0px",
    padding: "0px",
  },
  PokeTypeText: {
    [theme.breakpoints.up("xs")]: { fontSize: "1.5vh" },
    [theme.breakpoints.up("sm")]: { fontSize: "2vh" },
    margin: "0",
    padding: "0",
  },
  ExpText: {
    [theme.breakpoints.up("xs")]: { fontSize: "1.5vh" },
    [theme.breakpoints.up("sm")]: { fontSize: "2vh" },
    margin: "0px",
    padding: "0px",
  },
  PokeImg: {
    [theme.breakpoints.up("xs")]: { height: "9vh" },
    [theme.breakpoints.up("sm")]: { height: "18vh" },
    margin: "0 auto",
    padding: "0",
    display: "block",
    maxWidth: "100%",
    maxHeight: "50%",
  },
});
