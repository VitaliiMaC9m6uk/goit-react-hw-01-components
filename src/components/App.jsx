import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../parts/user.json';
import data from '../parts/data.json';
import friends from '../parts/friends.json';
import transactions from '../parts/transactions.json'



export const App = () => {
  
  return (<div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}      
    />
    
    <Statistics data={data} title='Upload stats' />   
    {/* <Statistics data={data}  />  */}
    <FriendList data={friends} /> 
    <TransactionHistory items={transactions}/>
    </div>
    );
};

