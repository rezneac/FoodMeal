import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

type iProp = {
  item: {
    id: string;
    title: string;
    color: string;
  };
};

const CategoriesScreen = ({navigation}: any) => {
  const renderCategoryItem = (itemData: iProp) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        colour={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#24180f',
  },
});

export default CategoriesScreen;
