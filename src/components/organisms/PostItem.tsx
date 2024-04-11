import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../pages/HomeScreen/HomeScreen.Styles';
import Post from '../../pages/HomeScreen/HomeScreen';

interface Post {
  id: string;
  date: string;
  username: string;
  path: string;
  description: string;
  likes: number;
  comments: number;
}

interface PostItemProps {
  item: Post;
  onLikePress: (postId: string) => void;
  onCommentPress: (postId: string) => void;
  onDeletePress: (postId: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({
  item,
  onLikePress,
  onCommentPress,
  onDeletePress,
}) => {
  return (
    <View style={styles.card} key={item.id}>
      <View style={styles.header}>
        <Text>{item.date}</Text>
        <TouchableOpacity onPress={() => onDeletePress(item.id)}>
          <Image
            source={require('../../assests/icons/delete.png')}
            style={styles.tabBarIcon}
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{uri: item.path}} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => onLikePress(item.id)}>
          <Text> ❤️ {item.likes === 1 ? '1 like' : `${item.likes} likes`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onCommentPress(item.id)}>
          <Text>
            💬 {item.comments === 1 ? '1 comment' : `${item.comments} comments`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostItem;
