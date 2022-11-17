import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { outerwear, tops } from "../database";

import PropTypes from "prop-types";
import ImageCarousel from "../components/ImageCarousel";


const CreateOutfitPage = ({ navigation, route }) => {

  return (
    <>
      <ScrollView>
        <ImageCarousel data={outerwear} />
        <ImageCarousel data={tops} />
      </ScrollView>
    </>
  );
};

export default CreateOutfitPage;
