/*
 * code adapted from https://www.newline.co/@kchan/building-a-smooth-image-carousel-with-flatlist-in-react-native--95393e2a
 */
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MAIN_TEXT_COLOUR, PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";

const { width } = Dimensions.get("window");

const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 48;

const ImageCarousel = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [dataWithPlaceholders, setDataWithPlaceholders] = useState([]);
  const currentIndex = useRef(0);
  const flatListRef = useRef(null);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  const [change, incrementChange] = useState(0);
  const [currIdx, setCurrIdx] = useState(0);

  useEffect(() => {
    console.log("current index is: ", currentIndex.current);
    console.log("curr idx: ", currIdx);
  }, [currentIndex.current, change]);

  //   useEffect(() => {
  //     console.log("current index is: ", currentIndex.current);
  //     console.log("current change is: ", change);
  //     console.log("curr idx: ", currIdx);
  //   }, [change])

  useEffect(() => {
    setDataWithPlaceholders([{ id: -1 }, ...data, { id: data.length }]);
    currentIndex.current = 1;
    setIsPrevDisabled(true);
  }, [data]);

  const handleOnViewableItemsChanged = useCallback(
    ({ viewableItems }) => {
      const itemsInView = viewableItems.filter(
        ({ item }) => item.image && item.item
      );

      if (itemsInView.length === 0) {
        return;
      }

      currentIndex.current = itemsInView[0].index;

      incrementChange(change + 1);

      setCurrIdx(currentIndex.current);

      setIsNextDisabled(currentIndex.current === data.length);
      setIsPrevDisabled(currentIndex.current === 1);
    },
    [data]
  );

  const handleOnPrev = () => {
    incrementChange(change + 1);
    if (currentIndex.current === 1) {
      return;
    }

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current - 1,
      });
    }
    setCurrIdx(currentIndex.current - 1);
  };

  const handleOnNext = () => {
    incrementChange(change + 1);
    if (currentIndex.current === data.length) {
      return;
    }

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current + 1,
      });
    }
    setCurrIdx(currentIndex.current + 1);
  };

  // `data` perameter is not used. Therefore, it is annotated with the `any` type to merely satisfy the linter.
  const getItemLayout = (_data, index) => ({
    length: ITEM_LENGTH,
    offset: ITEM_LENGTH * (index - 1),
    index,
  });

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={dataWithPlaceholders}
        renderItem={({ item, index }) => {
          if (!item.image || !item.item) {
            return <View style={{ width: EMPTY_ITEM_LENGTH }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_LENGTH,
            (index - 1) * ITEM_LENGTH,
            index * ITEM_LENGTH,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [
              CURRENT_ITEM_TRANSLATE_Y * 2,
              CURRENT_ITEM_TRANSLATE_Y,
              CURRENT_ITEM_TRANSLATE_Y * 2,
            ],
            extrapolate: "clamp",
          });

          return (
            <View style={{ width: ITEM_LENGTH }}>
              <Animated.View
                style={[
                  {
                    transform: [{ translateY }],
                  },
                  styles.itemContent,
                ]}
              >
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text style={styles.itemText} numberOfLines={1}>
                  {item.item}
                </Text>
              </Animated.View>
            </View>
          );
        }}
        getItemLayout={getItemLayout}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_LENGTH}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
      />
      <View style={styles.footer}>
        <Pressable
          onPress={handleOnPrev}
          disabled={isPrevDisabled}
          style={({ pressed }) => [
            {
              opacity: pressed || isPrevDisabled ? 0.5 : 1.0,
            },
            styles.arrowBtn,
          ]}
        >
          <Text
            style={styles.arrowBtnText}
            accessibilityLabel="Go To Previous Item"
          >
            ◂
          </Text>
        </Pressable>
        <Text>{"   "}</Text>
        <Pressable
          onPress={handleOnNext}
          disabled={isNextDisabled}
          style={({ pressed }) => [
            {
              opacity: pressed || isNextDisabled ? 0.5 : 1.0,
            },
            styles.arrowBtn,
          ]}
        >
          <Text
            style={styles.arrowBtnText}
            accessibilityLabel="Go To Next Item"
          >
            ▸
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    borderTopColor: PRIMARY_COLOUR,
    borderBottomColor: PRIMARY_COLOUR,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: SECONDARY_COLOUR
  },
  arrowBtn: {},
  arrowBtnText: {
    fontSize: 42,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  flatListContent: {
    height: CURRENT_ITEM_TRANSLATE_Y * 2 + ITEM_LENGTH,
    alignItems: "center",
    marginBottom: CURRENT_ITEM_TRANSLATE_Y,
  },
  item: {},
  itemContent: {
    marginHorizontal: SPACING * 3,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: BORDER_RADIUS + SPACING * 2,
  },
  itemText: {
    fontSize: 16,
    color: MAIN_TEXT_COLOUR,
    fontWeight: "700",
    padding: 8,
  },
  itemImage: {
    width: "80%",
    padding: "10%",
    height: ITEM_LENGTH,
    borderRadius: BORDER_RADIUS,
    resizeMode: "cover",
  },
});
