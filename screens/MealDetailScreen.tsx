import {useContext, useLayoutEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import {addFavorite, removeFavorite} from '../store/redux/favorites';

interface RootState {
  favoriteMeals: {
    ids: string[];
  };
}

const MealDetailScreen = ({route, navigation}: any) => {
  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealsIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealsIsFavorite) {
      dispatch(removeFavorite(mealId));
    } else {
      dispatch(addFavorite(mealId));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
        style={styles.blank}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients:</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps:</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    color: 'white',
    textAlign: 'center',
  },
  detailText: {
    color: 'white',
  },
  subtitle: {
    color: '#e2b497',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  blank: {},
  listContainer: {
    maxWidth: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
