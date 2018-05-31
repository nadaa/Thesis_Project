import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Finance from './Finance';
import UserInfo from './UserInfo';
import Shortage from './Shortage';
import TaskMonitor from './TaskMonitor';

const MyDrawer = createDrawerNavigator(
  {
    'Task Monitor': {
      screen: TaskMonitor,
    },
    Finance: {
      screen: Finance,
    },
    Shortage: {
      screen: Shortage,
    },
    'User Information': {
      screen: UserInfo,
    },
  },
  {
    initialRouteName: 'Task Monitor',
    drawerPosition: 'left',
    drawerWidth: 200,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: 'green',
    },
  }
);

export default class Drawer extends React.Component {
  static router = MyDrawer.router;
  render() {
    return (
      <View style={styles.allPage}>
        <MyDrawer navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  allPage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginBottom: 25,
  },
});
