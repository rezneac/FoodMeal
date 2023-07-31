import {StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';

interface IProps {
  navigation: object;
  route: {params: {categoryId: string}};
}

const MealsOverviewScreen = ({navigation, route}: IProps) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
