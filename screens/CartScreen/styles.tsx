import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, backgroundColor: "#bebebe" },
  cartContainer: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartImage: { width: 100, height: 120 },
  title: { fontSize: 16, flex: 1, fontWeight: "400", marginLeft: 10 },
  price: { marginHorizontal: 10, fontSize: 18, fontWeight: "500" },
  spinner:{flex:1,alignItems:'center',backgroundColor:'white'}
});

export default styles;
