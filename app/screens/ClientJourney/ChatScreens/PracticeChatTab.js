import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import AppText from "../../../components/Text";
import AppTextInput from "../../../components/TextInput";
import colors from "../../../config/colors";

const messages = [
  {
    id: 1,
    username: "Dr. John Smith",
    lastMessage: "I sent yout patient contact...",
    timeStamp: "06:23",
    imageUri: require("../../../assets/images/dr1.jpg"),
  },
  {
    id: 2,
    username: "Dr. Lina Thomsan",
    lastMessage: "How do you think?",
    timeStamp: "05:23",
    imageUri: require("../../../assets/images/dr2.jpg"),
  },
  {
    id: 3,
    username: "Dr. Dylan Oliver",
    lastMessage: "Yes, Tue.",
    timeStamp: "06:21",
    imageUri: require("../../../assets/images/dr3.jpg"),
  },
];

function PracticeChatTab({ navigation }) {
  return (
    <View style={styles.container}>
      <AppTextInput
        searchIcon
        placeholder="Search Practice"
        iconAlign="left"
        handleChangeText={() => {}}
      />

      <ScrollView style={{ marginVertical: 20 }}>
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const MessageCard = ({ message, navigation }) => (
  <TouchableHighlight
    style={{
      flexDirection: "row",
      paddingHorizontal: 5,
      paddingVertical: 10,
    }}
    onPress={() => navigation.navigate("InboxScreen")}
    underlayColor={colors.lightGray}
  >
    <>
      <Image
        source={message.imageUri}
        style={{ width: 60, height: 60, borderRadius: 10 }}
      />
      <View
        style={{
          alignSelf: "flex-end",
          marginLeft: 15,
          flex: 1,
        }}
      >
        <AppText>{message.username}</AppText>
        <AppText>{message.lastMessage}</AppText>
      </View>
      <AppText
        style={{
          alignSelf: "flex-end",
          color: colors.textGray,
        }}
      >
        {message.timeStamp}
      </AppText>
    </>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default PracticeChatTab;
