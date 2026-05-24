import { createTopBarStyles } from "@/assets/styles/shared/Topbar.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface TopBarProps {
  username?: string;
  profileImage?: string;
  onNotificationPress?: () => void;
}

const TopBar = ({
  username,
  profileImage,
  onNotificationPress,
}: TopBarProps) => {
  const { theme } = useTheme();
  const styles = createTopBarStyles(theme);

  return (
    <View style={styles.container}>
      {/* LEFT SIDE */}
      <View style={styles.leftContainer}>
        <Image
          source={{
            uri: profileImage || "https://i.pravatar.cc/300",
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.appName}>DailyDo</Text>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={onNotificationPress}
        activeOpacity={0.8}
      >
        <Ionicons
          name="notifications-outline"
          size={22}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
