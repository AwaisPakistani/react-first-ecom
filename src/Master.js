import React from "react";
import { auth } from "./firebase/firebase.utils";
import Header from "./components/header/header.component";


// class Master extends React.Component{
//     constructor(){
//         super();
//         this.state={
//           currentUser:null
//         };
      
    
//       }
    
//       unSubscribeFromAuth=null;
//       componentDidMount(){
//         this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
//           this.setState({currentUser:user});
//         })
//       }
    
//       componentWillUnmount(){
//         this.unSubscribeFromAuth();
//       }

//     render({children}){
//         return(
//             <div>
//                    <Header />
//                        {children}
//             </div>
//         );
//     };
// }

function Master({ children }) {
    
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
export default Master;