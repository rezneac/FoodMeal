import {MEALS, CATEGORIES} from '../data/dummy-data';
import {useLayoutEffect} from 'react';
import MealsList from '../components/MealList/MealsList';

interface IProps {
  navigation: any;
  route: any;
}

const MealsOverviewScreen = ({navigation, route}: IProps) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const foundCategory = CATEGORIES.find(category => category.id === catId)?.title;

    navigation.setOptions({
      title: foundCategory,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
