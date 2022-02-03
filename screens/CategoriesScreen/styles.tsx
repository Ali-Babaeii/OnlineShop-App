import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    backgroundColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
  },
  spinner: { flex: 1, alignItems: "center" },
  pressable: {
    width: 170,
    height: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  darkView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 25, fontWeight: "600" },
  image: { width: "100%", height: "100%" },
  container: { flex: 3, padding: 5 },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
  },
  categoryText: { fontSize: 14 },
  showAllText: { color: "#F2941B", fontSize: 15, fontWeight: "400" },
  showAllContainer: { flexDirection: "row", alignItems: "center" },
  icon: { width: 25, height: 25, marginLeft: 5 },
});

export default styles;
