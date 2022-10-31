import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  DasboardBody: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
  },
  menu: {
    width: '16%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_title: {
    width: '68%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_logo: {
    width: '16%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header_logo_img: {
    width: 40,
    height: 40,
  },

  searchView: {
    backgroundColor: '#F5F5F5',
    marginVertical: 10,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  listBox: {
    flex: 1,
    margin: 17,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#F5F5F5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    color: 'green',
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },

  url: {
    color: 'green',
    textAlign: 'center',
    marginTop: 15,
    backgroundColor: '#4169e1',
    fontSize: 18,
  },

  carousel: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  position: {
    marginTop: -20,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },

  carouselImage: {
    width: 340,
    height: 300,
    resizeMode: 'cover',
  },

  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },

  paginateText: {
    color: '#4169e1',
    margin: 3,
  },
  paginateTextactive: {
    color: 'green',
    margin: 3,
  },

  CredentialText: {
    marginRight: 'auto',
    paddingLeft: 35,
    color: 'red',
  },

  hideShowPass: {
    width: 18,
    height: 18,
    marginLeft: 26,
  },

  LoginLogo: {
    width: 90,
    height: 80,
    marginBottom: 30,
  },

  bodyLogin: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 150,
  },

  IndicatorLogin: {
    height: 10,
    marginTop: 13,
  },

  login_Input: {
    display: 'flex',
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    width: '85%',
  },
  textInputWithIcon: {
    width: '80%',
    alignSelf: 'center',
    height: 35,
    marginLeft: 10,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonTextLogin: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  buttonLogin: {
    backgroundColor: '#4169e1',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonContainerLogin: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  containerLogin: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
