import ProfileImage from "./ProfileImage";
import Timestamp from "./TimeStamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(prop) {
  return (
    <div className="tweet">
      <ProfileImage image={prop.tweet.user.image}/>
      {/* <img
        src={prop.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">
          <User data={prop.tweet.user}/>
          {/* <span className="user">
            <span className="name">{prop.tweet.user.name}</span>
            <span className="handle">{"@" + prop.tweet.user.handle}</span>
          </span> */}
          <Timestamp time={prop.tweet.timestamp}/>
          {/* <span className="timestamp">{prop.tweet.timestamp}</span> */}
        </div>

        <Message message={prop.tweet.message}/>
        {/* <p className="message">
          {prop.tweet.message}
        </p> */}

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
    // <div className="tweet">
    //   <img
    //     src="https://i.imgur.com/9yw1Fyw.jpg"
    //     className="profile"
    //     alt="profile"
    //   />

    //   <div className="body">
    //     <div className="top">
    //       <span className="user">
    //         <span className="name">Ironhack</span>
    //         <span className="handle">@ironhack</span>
    //       </span>

    //       <span className="timestamp">Nov 30, 2020</span>
    //     </div>

    //     <p className="message">
    //       On December 7th, we will be hosting a #webinar that will introduce you
    //       to #SQL! Are you ready? 🚀
    //     </p>

    //     <div className="actions">
    //       {/* Font Awesome icons */}
    //       <i class="far fa-comment"></i>
    //       <i class="fas fa-retweet"></i>
    //       <i class="far fa-heart"></i>
    //       <i class="fas fa-share"></i>
    //     </div>
    //   </div>

    //   <i class="fas fa-ellipsis-h"></i>
    // </div>
  );
}

export default Tweet;
