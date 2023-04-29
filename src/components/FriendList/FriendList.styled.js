import styled from 'styled-components';

export const ListFriends = styled.ul`
    margin:15px auto;
    width:300px;   
    display:flex;
    gap:15px;
    flex-direction:column;
`
export const FriendItem = styled.li`
    display:flex;
    align-items:center;
    gap:10px;
    box-shadow: 5px 5px 10px rgb(24, 22, 22);
    padding:10px;

`
export const FriendAvatar = styled.img`
width:60px;
`
export const FriendStatus = styled.span`
    width:15px;
    height:15px;
    border-radius:50%;
    background-color:${({ isOn }) => {
    return isOn? 'green':'red'
    }};
    
`