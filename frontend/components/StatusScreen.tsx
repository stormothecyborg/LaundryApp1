import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Status: { username: string; washTime: string };
};

type StatusScreenRouteProp = RouteProp<RootStackParamList, 'Status'>;

interface StatusScreenProps {
  route: StatusScreenRouteProp;
}

interface UserStatus {
  user_name: string;
  status: string;
  wash_time: number;
  arrived_at: string;
  assigned_at?: string;
  waiting_time?: number;
  machine_available_at?: string;
}

const StatusScreen: React.FC<StatusScreenProps> = ({ route }) => {
  const { username, washTime } = route.params;
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [message, setMessage] = useState<string>('');

  const fetchUserStatus = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8080/user_status?user_name=${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user status');
      }
      const responseData = await response.json();
      setUserStatus(responseData);
      if (responseData.message === "Wash successful. Pick up your clothes") {
        setMessage(responseData.message);
        console.log(responseData.message); // Log the message to the console
      }
    } catch (error) {
      console.error('Error fetching user status:', error);
    }
  };

  const handleRefresh = () => {
    fetchUserStatus();
  };

  useEffect(() => {
    fetchUserStatus();
  }, [username]);

  return (
    <View style={styles.container}>
      {userStatus ? (
        <View>
          {message ? (
            <Text style={styles.message}>{message}</Text>
          ) : (
            <>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 23 }}>User Status</Text>
              {userStatus.status && (
                <Text style={{ color: 'black', fontSize: 20 }}>{userStatus.status}</Text>
              )}
             {userStatus.status && userStatus.status.includes("Queue") && (
  <>
    <Text style={styles.text}>
      Waiting Time: {userStatus.waiting_time !== undefined ? userStatus.waiting_time + ' minutes' : 'N/A'}
    </Text>
    <Text style={styles.text}>
      Machine Available At: {userStatus.machine_available_at ?
        new Date(userStatus.machine_available_at).toLocaleTimeString() : 'N/A'}
    </Text>
  </>
)}

              <Text style={styles.text}>
                User Name: {userStatus.user_name}
              </Text>
              <Text style={styles.text}>
                Wash Time: {userStatus.wash_time}
              </Text>
              <Text style={styles.text}>
                Arrived At: {userStatus.arrived_at}
              </Text>
              {userStatus.assigned_at && (
                <Text style={styles.text}>
                  Assigned At: {userStatus.assigned_at}
                </Text>
              )}
            </>
          )}
          <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
            <Text style={styles.refreshButtonText}>Refresh</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  message: {
    color: 'green',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  refreshButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  refreshButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StatusScreen;
