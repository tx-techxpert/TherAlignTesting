import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../../../components/Button";
import ListItemSeperator from "../../../components/ListItemSeperator";
import Screen from "../../../components/Screen";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { ClientRoutes } from "../../../navigation/Routes";

function TherapistProfileScreen({ route, navigation }) {
  const { therapiDetail } = route.params;

  return (
    <Screen style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={therapiDetail.imageURI}
          style={{ width: 120, height: 130, borderRadius: 10 }}
        />
        <View style={{ marginHorizontal: 20 }}>
          <AppText>{therapiDetail.name}</AppText>
          <AppText>{therapiDetail.title}</AppText>
          <AppText>***** ({therapiDetail.rating})</AppText>
        </View>
      </View>
      {/* Desctiption */}
      <View style={{ marginVertical: 10 }}>
        <AppButton
          title={"Video appointment"}
          color="#fff"
          textColor="#000"
          borderWidth={1}
          style={{ borderColor: colors.primary }}
          onPress={() =>
            navigation.navigate(ClientRoutes.HOME_SLOT_SELECTING_SCREEN)
          }
        />
        <AppButton
          title={"In persone appointment"}
          color="#fff"
          textColor="#000"
          borderWidth={1}
          style={{ borderColor: colors.primary }}
          onPress={() =>
            navigation.navigate(ClientRoutes.HOME_CALENDAR_APPOINTMENT_SCREEN)
          }
        />
      </View>

      <AppText
        style={{
          textAlign: "center",
          marginVertical: 20,
          padding: 10,
        }}
        onPress={() =>
          navigation.navigate(ClientRoutes.HOME_FEEDBACK_SCREEN, {
            therapiDetail,
          })
        }
      >
        Feedback
      </AppText>
      <ListItemSeperator />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default TherapistProfileScreen;
