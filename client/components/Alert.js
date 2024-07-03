import { Text, View } from "react-native";
import styles from "../styles/alertStyles";
import { Dialog } from "react-native-elements";

const Alert = (props) => {
  if (!props.visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      {props.type == "alert" ? (
        <Dialog isVisible={props.visible} onBackdropPress={props.onClose}>
          <Dialog.Title title={props.title} />
          <Text>{props.message}</Text>
          <Dialog.Button title="Agree!" onPress={props.onClose} />
        </Dialog>
      ) : (
        <Dialog isVisible={props.visible} onBackdropPress={props.onClose}>
          <Dialog.Title title={props.title} />
          <Text>{props.message}</Text>
          <Dialog.Actions>
            <Dialog.Button title="yes!" onPress={props.onClick} />
            <Dialog.Button title="no!" onPress={props.onClose} />
          </Dialog.Actions>
        </Dialog>
      )}
    </View>
  );
};

export default Alert;
