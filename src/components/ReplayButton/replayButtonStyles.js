export default (theme) => ({
  ReplayButton: {
    [theme.breakpoints.up("xs")]: {
      height: "2vh",
      fontSize: "2vh",
      maxWidth: "15vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "4vh",
      fontSize: "3vh",
      maxWidth: "22vh",
    },
    textAlign: "center",
    border: "3px solid #4fa340",
    borderRadius: "3px",

    margin: "0 auto 1vh auto",
    padding: "0 0 1vh 0",
    backgroundColor: "#b3e8a9",
    userSelect: "none",
    "&:active": {
      backgroundColor: "#4fa340",
    },
  },
});
