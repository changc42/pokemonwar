export default (theme) => ({
  ExpMessage: {
    [theme.breakpoints.up("xs")]: { fontSize: "1.5vh" },
    [theme.breakpoints.up("sm")]: { fontSize: "2vh" },

    textAlign: "center",
    margin: 0,
    padding: 0,
    opacity: (props) => (props.isGameStart ? 1 : 0),
  },
});
