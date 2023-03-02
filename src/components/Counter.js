//rce snippet
import React, { Component } from 'react'

// use setState
class Counter extends Component {
    //rconst snippet
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        //this.state.count = this.state.count + 1 affects on console not UI
        //setState rerenders the component
    //     this.setState({
    //         count: this.state.count + 1
    //         },
    //         () => {
    //             console.log('Callback Value ', this.state.count)
    //         })
    //     console.log(this.state.count)
    // }

    this.setState(prevState => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count)
}
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter