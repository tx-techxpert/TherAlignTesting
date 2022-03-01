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
import ImagesPath from "../../../constants/ImagesPath";
import { wp } from "../../../Helpers/Responsiveness";

const messages = [
  {
    id: 1,
    username: "Dr. John Smith",
    lastMessage: "I sent yout patient contact...",
    timeStamp: "06:23",
    imageUri: ImagesPath.dr1,
  },
  {
    id: 2,
    username: "Dr. Lina Thomsan",
    lastMessage: "How do you think?",
    timeStamp: "05:23",
    imageUri: ImagesPath.dr2,
  },
  {
    id: 3,
    username: "Dr. Dylan Oliver",
    lastMessage: "Yes, Tue.",
    timeStamp: "06:21",
    imageUri: ImagesPath.dr3,
  },
];

function TherapistChatTab({ navigation }) {
  return (
    <View style={styles.container}>
      <AppTextInput searchIcon placeholder="Search Practice" iconAlign="left" />

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
      paddingHorizontal: wp(1),
      paddingVertical: wp(3),
    }}
    onPress={() => navigation.navigate("InboxScreen")}
    underlayColor={colors.lightGray}
  >
    <>
      <Image
        source={message.imageUri}
        style={{ width: wp(15), height: wp(15), borderRadius: 10 }}
      />
      <View
        style={{
          alignSelf: "flex-end",
          marginLeft: wp(3.5),
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
  container: { flex: 1, padding: wp(4) },
});

export default TherapistChatTab;
