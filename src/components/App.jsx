import user from '../data/user.json';
import Profile from './Profile/Profile.jsx';
import friends from '../data/friend_list';
import FriendList from './FriendList/FriendList.jsx';
import data from '../data/data.json';
import Statistics from './Statistics/Statistics.jsx';
import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
