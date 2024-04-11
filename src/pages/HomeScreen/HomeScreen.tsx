import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, RefreshControl, Alert} from 'react-native';
import axios from 'axios';
import styles from './HomeScreen.Styles';
import PostItem from '../../components/organisms/PostItem';
import formatDate from '../../components/atoms/FormatData';

export interface Post {
  id: string;
  username: string;
  path: string;
  likes: number;
  comments: number;
  date: string;
}

const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    setRefreshing(true);
    try {
      const response = await axios.get<Post[]>(
        'https://6611592395fdb62f24ecfdec.mockapi.io/Me',
      );
      const formattedPosts = response.data
        .map(post => ({
          ...post,
          date: formatDate(post.date),
          likes: post.likes || 0,
          comments: post.comments || 0,
        }))
        .reverse();
      setPosts(formattedPosts);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const onLikePress = useCallback(
    async (postId: string) => {
      const updatedPosts = posts.map(post =>
        post.id === postId ? {...post, likes: post.likes + 1} : post,
      );
      setPosts(updatedPosts);

      try {
        const postToUpdate = updatedPosts.find(post => post.id === postId);
        if (postToUpdate) {
          await axios.put(
            `https://6611592395fdb62f24ecfdec.mockapi.io/Me/${postId}`,
            {likes: postToUpdate.likes},
          );
        }
      } catch (error) {
        console.error('Error updating likes:', error);
        setPosts(
          posts.map(post =>
            post.id === postId ? {...post, likes: post.likes - 1} : post,
          ),
        );
      }
    },
    [posts],
  );

  const onCommentPress = useCallback(
    async (postId: string) => {
      const updatedPosts = posts.map(post =>
        post.id === postId ? {...post, comments: post.comments + 1} : post,
      );
      setPosts(updatedPosts);

      try {
        const postToUpdate = updatedPosts.find(post => post.id === postId);
        if (postToUpdate) {
          await axios.put(
            `https://6611592395fdb62f24ecfdec.mockapi.io/Me/${postId}`,
            {comments: postToUpdate.comments},
          );
        }
      } catch (error) {
        console.error('Error updating comments:', error);
        setPosts(
          posts.map(post =>
            post.id === postId ? {...post, comments: post.comments - 1} : post,
          ),
        );
      }
    },
    [posts],
  );

  const onManualRefresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const onDeletePress = useCallback(async (postId: string) => {
    try {
      Alert.alert(
        'Confirm Delete',
        'Are you sure you want to delete this post?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: async () => {
              await axios.delete(
                `https://6611592395fdb62f24ecfdec.mockapi.io/Me/${postId}`,
              );
              setPosts(prevPosts =>
                prevPosts.filter(post => post.id !== postId),
              );
            },
            style: 'destructive',
          },
        ],
      );
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }, []);

  return (
    <FlatList
      style={styles.flatList}
      data={posts}
      renderItem={({item}) => (
        <PostItem
          item={item}
          onLikePress={onLikePress}
          onCommentPress={onCommentPress}
          onDeletePress={onDeletePress}
        />
      )}
      keyExtractor={item => item.id.toString()}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onManualRefresh}
          colors={['#9Bd35A', '#689F38']}
          tintColor="#689F38"
          title="Pull to refresh"
          titleColor="#689F38"
        />
      }
    />
  );
};

export default HomeScreen;
