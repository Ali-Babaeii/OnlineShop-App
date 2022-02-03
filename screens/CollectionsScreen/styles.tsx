import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
cardContainer:{
  margin: 5,
  backgroundColor: 'gray',
  borderRadius: 10,
  overflow: 'hidden',
},
pressable:{
  width: 190,
  height: 50,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
itemContainer:{ backgroundColor: "#bebebe" },
listContainer:{ overflow: "hidden", margin: 3, borderRadius: 10 },
darkView:{
  position: "absolute",
  width: "100%",
  padding: 10,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
},
itemText:{
  color: "white",
  fontSize: 12,
  fontWeight: "300",
  flex: 1,
},
itemPrice:{ color: "white", fontSize: 12, fontWeight: "300" },

  spinner: { flex: 1, alignItems: "center" },
  cardContent:{
    backgroundColor: "#d4d4d4",
    borderRadius: 1000,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    flexDirection: "row",
  },
  imageContent:{ width: "100%", height: 300 },
  footerContent:{
    flex: 1.4,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  textContainerContext:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  titleContent:{ fontSize: 22, fontWeight: "500", flex: 1 },
  priceContent:{ fontSize: 20, fontWeight: "500" },
  description:{ color: "#747e88", fontSize: 16, fontWeight: "400" },
  size:{ marginVertical: 15, fontSize: 16, fontWeight: "400" },
  buttonContainer:{ justifyContent: "center", marginVertical: 5 },
  buttonTochable:{
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "#F2941B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonIcon:{ width: 25, height: 25 },
  buttonText:{ fontSize: 18, color: "white", fontWeight: "600" }

});

export default styles;
