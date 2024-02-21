import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Special Dish',
      description: 'Delicious dish with a special flavor.',
      image: require('./src/assets/download.jpg'),
    },
    {
      id: 2,
      title: 'Chef Recommendation',
      description: 'A masterpiece created by our chef.',
      image: require('./src/assets/indian.jpg'),
    },
    {
      id: 3,
      title: 'Dessert Delight',
      description: 'Sweet and satisfying desserts for you.',
      image: require('./src/assets/download.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('./src/assets/line.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>
          Home
        </Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('./src/assets/cart.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('./src/assets/PosLogo2.png')}
      />
      <Text
        style={{
          fontSize: 34,
          fontWeight: 'bold',
          color: '#ff9800',
          marginVertical: 5,
        }}>
        Welcome To Vass Res
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Catering</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dine In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reservation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take Away</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemscrollContainer}>
        {cardsData.map(card => (
          <TouchableOpacity key={card.id} style={styles.card}>
            <Image style={styles.cardImage} source={card.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.loginbutton}>
        <Text style={styles.buttonText}>Login/SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#11130c',
  },
  header: {
    backgroundColor: '#ff9800',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  tinyLogo: {
    height: 100,
    marginTop: 30,
    marginBottom: 10,
    width: 100,
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemscrollContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    width: 250,
  },
  cardImage: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  loginbutton: {
    backgroundColor: '#ff9800',
    height: 60,
    width: 180,
    justifyContent: 'center',
    marginBottom: 30,
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    height: 60,
    width: 230,
    justifyContent: 'center',
    marginVertical: 13,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  iconImage: {
    height: 35,
    width: 35,
  },
});

export default App;
