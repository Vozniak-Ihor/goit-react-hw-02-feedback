import { Profile } from "component/profile/profile";
import { Statistics } from "component/statistics/statistics";
import { FriendList } from "component/friendList/friendList";
import { TransactionHistory } from "component/transactionHistory/transactionHistory";
import user from "./component/profile/user.json";
import data from "./component/statistics/data.json";
import friends from "./component/friendList/friends.json";
import transactions from "./component/transactionHistory/transactions.json";

function App() {
  return (
    <>
      <div className="App">
        <h2>-----------------  Tack 1  -----------------</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <h2>-----------------  Tack 2  -----------------</h2>
      <Statistics 
      title="Upload stats" 
      statistics={data} 
      />
      <h2>-----------------  Tack 3  -----------------</h2>
     <FriendList friends={friends}/>
      <h2>-----------------  Tack 4  -----------------</h2>
      <TransactionHistory transactions={transactions}/>
    </>
  );
}

export default App;
