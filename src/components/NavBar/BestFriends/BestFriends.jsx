import friends from "./BestFriends.module.css";
import Friend from "./Friend/Friend";

const BestFriends = (props) => {

    const friendsList = props.friends.map((friend)=>{
        return (
            <Friend name={friend.name} surname={friend.surname} id={friend.id} avatar={friend.avatar}/>
            )
    })

    return (
        <ul className={friends.list}>
            {friendsList}
        </ul>
    );
};

export default BestFriends;
