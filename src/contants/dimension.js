import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const tlr = width / 373
const tlh = height / 734

export {
    tlh,
    tlr
}