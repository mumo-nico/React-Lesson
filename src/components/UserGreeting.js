import React, { Component } from 'react'
// conditional rendering
class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    render(){
        //short circuit
        return this.state.isLoggedIn && <div>Welcome Mumo</div>
        //ternary operator
        // return this.state.isLoggedIn ?
        // <div>Welcome Mumo</div> :
        // <div>Welcome Stranger</div>

        //element variables
        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Mumo</div>
        // } else {
        //     message = <div>Welcome Stranger</div>
        // }
        // return <div>{message}</div>
//if else statement
//   render() {
//     if(this.state.isLoggedIn){
//         return <div>Welcome Mumo</div>
//     } else {
//         return <div>Welcome Stranger</div>
//     }
    // return (
    //     <div>
    //   <div>Welcome Mumo</div>
    //   <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting