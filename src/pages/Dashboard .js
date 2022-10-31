import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {globalStyles} from '../styles/globals';
import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../context/Context';
import {HeaderComponent, InputSearch} from '../components/MainComponents';
import _ from 'lodash';
import {Linking} from 'react-native';
import {getArticales} from '../providers/providers';
import {useSelector, useDispatch} from 'react-redux';
import {setToken, setData} from '../redux/Actions';
const Dashboard = ({navigation}) => {
  const myContext = useContext(AppContext);
  // const [DataList, setDataList] = useState(myContext.data_list);
  const [List, setList] = useState('');
  const [fullData, setFullData] = useState();
  const [query, setQuery] = useState('');
  const [EmptyList, setEmptyList] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [active, setActive] = useState(0);
  const {token, data} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const getData = async (token, index) => {
    setLoading1(true);
    getArticales(token, index)
      .then(response => {
        dispatch(setData(response.data.response.docs));
        setEmptyList(true);
        setLoading1(false);
        setList(response.data.response.docs);
        setFullData(response.data.response.docs);
      })
      .catch(error => {
        setEmptyList(true);
        setLoading1(false);
      });
  };

  useEffect(() => {
    getData(token, currentPage);
  }, []);

  const Logout = () => {
    navigation.replace('Login');
  };

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide != active) {
      setActive(slide);
    }
  };

  const openUrl = url => {
    Linking.openURL(`${url}`);
  };

  const handleSearch = text => {
    const formattedQuery = text;
    const data = _.filter(fullData, item => {
      if (item.headline.main.includes(formattedQuery)) {
        return true;
      }
      return false;
    });
    setList(data);
    setQuery(text);
  };

  const renderItemBox = ({item}) => (
    <View style={globalStyles.listBox}>
      <Text style={globalStyles.title}>{item.headline.main}</Text>
      <Text style={globalStyles.url} onPress={() => openUrl(item.web_url)}>
        web_url
      </Text>
      <View style={globalStyles.carousel}>
        <ScrollView
          onScroll={change}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{width: 340}}>
          {item?.multimedia?.map((item, index) => (
            <Image
              key={index}
              source={{
                uri: 'https://static01.nyt.com/' + item.url,
              }}
              style={globalStyles.carouselImage}
            />
          ))}
        </ScrollView>
      </View>

      <View style={globalStyles.position}>
        {item?.multimedia?.map((i, k) => (
          <Text
            key={k}
            style={
              k == active
                ? globalStyles.paginateTextactive
                : globalStyles.paginateText
            }>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );

  const renderFooter = () => {
    return loading1 ? (
      <View style={globalStyles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    if (query === '') {
      getData(token, currentPage + 1);
      setCurrentPage(currentPage + 1);
    } else return;
  };

  const EmptyListMessage = () => {
    return EmptyList ? (
      <View>
        <Text style={globalStyles.emptyListStyle}>No Data Found</Text>
      </View>
    ) : null;
  };

  return (
    <View style={globalStyles.DasboardBody}>
      <HeaderComponent title="Dashboard" onClick={Logout} />
      <InputSearch
        autoCorrect={false}
        query={query}
        handleSearch={handleSearch}
      />

      <SafeAreaView style={{flex: 1, marginBottom: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={List}
          keyExtractor={item => item._id}
          renderItem={renderItemBox}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={EmptyListMessage}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Dashboard;
