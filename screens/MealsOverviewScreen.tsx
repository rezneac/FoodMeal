import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

interface IProps {
  navigation: object;
  route: any;
}

const MealsOverviewScreen = ({navigation, route}: IProps) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData: any) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem} />
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
