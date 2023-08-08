import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_FILMS_QUERY } from "./graphql";
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  Pressable,
  Modal
} from "react-native";
import { ZoomableImage } from "./ZoomableImage";
import { ZoomModal } from "./ZoomModal";

export const FilmList = () => {
  const { loading, error, data } = useQuery(ALL_FILMS_QUERY);

  const [showImage, setShowImage] = useState({ status: false, data: null });

  const renderFilmItem = ({ item }) => (
    <Animated.View style={{ marginLeft: 10, opacity: item.appear }}>
      <Pressable onPress={() => handleFilmZoom(item)}>
        <Image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_960_720.jpg"
          }} // Implement this function
          style={{ width: 150, height: 200 }}
        />
        <Text>{item.title}</Text>
        <Text>{item.releaseDate}</Text>
      </Pressable>
    </Animated.View>
  );

  const handleFilmZoom = (film) => {
    setShowImage({ ...showImage, status: true, data: film });
  };

  return (
    <>
      <View>
        {loading ? (
          <Text>loading..</Text>
        ) : error ? (
          <Text>Error fetching data</Text>
        ) : (
          <FlatList
            data={data.allFilms.films}
            renderItem={renderFilmItem}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
          />
        )}
      </View>
      <ZoomModal setShowImage={setShowImage} showImage={showImage} />
    </>
  );
};
