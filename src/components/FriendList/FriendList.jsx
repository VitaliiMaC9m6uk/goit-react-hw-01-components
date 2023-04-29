import PropTypes from 'prop-types';
import { ListFriends,FriendItem,FriendAvatar,FriendStatus } from './FriendList.styled';

export const FriendList = ({ data }) => {
    return (
    <ListFriends >
    {data.map(friend => (
       <FriendItem key={friend.id}>
            <FriendStatus isOn={friend.isOnline}></FriendStatus>
            <FriendAvatar src={friend.avatar} alt='foto'/>
            <p className="name">{friend.name}</p>
        </FriendItem> 
       ))}     
    </ListFriends>
  )
}

FriendList.prototype = {
  data: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,
  }))
}