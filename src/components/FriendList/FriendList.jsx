import PropTypes from 'prop-types';
export const FriendList = ({ data }) => {
    return (
    <ul className="friend-list">
    {data.map(friend => (
       <li className="item" key={friend.id}>
            <span className="status"></span>
            <img className="avatar" src={friend.avatar} alt='foto' width="48" />
            <p className="name">{friend.name}</p>
        </li> 
       ))}     
    </ul>
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