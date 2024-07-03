import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  checkBoxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    border: "none",
    backgroundColor: "transparent",
  },
  icon: {
    fontSize: "25px",
  },
  textInput: {
    height: 40,
    width: "100%",
  },
  errorInput: {
    border: "1px solid red",
    borderRadius: 5,
  },
  textError: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
  mapContainer: {
    height: 200,
    marginTop: 20,
    width: "90%",
  },
  map: {
    flex: 1,
  },
});

export default styles;
