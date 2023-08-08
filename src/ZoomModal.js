import { Modal, Pressable, Text, View } from "react-native";
import { ZoomableImage } from "./ZoomableImage";

export const ZoomModal = ({ showImage, setShowImage }) => {
  return (
    <Modal visible={showImage.status} transparent={true}>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <ZoomableImage
          imageUri={
            "https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_960_720.jpg"
          }
        />
        <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>
          {showImage?.data?.title}
        </Text>

        <Pressable
          onPress={() => setShowImage({ ...showImage, status: false })}
          style={{ padding: 20 }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
