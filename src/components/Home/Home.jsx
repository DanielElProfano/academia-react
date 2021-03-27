import { Timeline, Tween } from "react-gsap";
import "./Home.scss";

const Home = () => {
  return (
    <div className="b-home">
      <Timeline target={<div className="b-home__c1"></div>}>
        <Tween
          from={{ x: "-100vw", opacity: 0 }}
          to={{ x: "250px", opacity: 1 }}
          duration={2}
        />
      </Timeline>

      <div className="b-logo">
        <Timeline
          target={
            <div>
              <span className="b-logo__A">A</span>cademy
            </div>
          }
        >
          <Tween
            from={{ opacity: 0, y: "-100vh" }}
            to={{ opacity: 1, y: "0" }}
            duration={3}
          />
        </Timeline>
        <Timeline
          target={
            <div>
              <span className="b-logo__H">H</span>igh
            </div>
          }
        >
          <Tween
            from={{ opacity: 0, x: "100vw" }}
            to={{ opacity: 1, x: "0px" }}
            duration={2}
          />
        </Timeline>
        <Timeline
          target={
            <div>
              <span className="b-logo__S">S</span>chool
            </div>
          }
        >
          <Tween
            from={{ opacity: 0, y: "100vh" }}
            to={{ opacity: 1, y: "0px" }}
            duration={3}
          />
        </Timeline>
      </div>

      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Home;
