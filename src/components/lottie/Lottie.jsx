import React from 'react'
import Lottie from 'react-lottie';
import animationData from './46462-email-vermelho.json'
 
class LottieControl extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false, isComplete: false};
  }
 
  render() {
    // const buttonStyle = {
    //   display: 'block',
    //   margin: '10px auto'
    // };
 
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      },
      eventListeners:[
        {
          eventName: 'complete',
          callback: () => console.log('the animation completed:'),
        },
      ]
    };
    
    return <div>
      <Lottie options={defaultOptions}
              height={200}
              width={200}
            
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button> */}
    </div>
  }
}

export default LottieControl
 