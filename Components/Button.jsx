import { TouchableOpacity, View, Text } from "react-native";

export const Button1 = ({ onPress, title, style, textstyle, height }) => (
  <TouchableOpacity
    style={[
      {
        height: 30,
        backgroundColor: "white",
        marginEnd: "auto",
        marginRight: "auto",
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      style,
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        { color: "white", fontFamily: "poppinsBold", fontSize: 15 },
        textstyle,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
