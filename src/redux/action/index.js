import axios from 'axios'
import { API_URL } from '../../utils/ApiUrl';


// export const GetUsers = (account,token) => async (dispatch) => {
//   // dispatch({
//   //   type: "loader",
//   //   payload: true,
//   // });

//   if(account && token){
//     await axios.post(API_URL + "users/getUser", {walletAddress:account}, { headers: { "Authorization": `Bearer ${token}` } })
//     .then(async (res) => {
//       if (res.data.user != null ) {
//         // loader=false
//         dispatch({
//           type: "GETUSER",
//           payload: res.data.user,
//         });
//         // dispatch({
//         //   type: "loader",
//         //   payload: false,
//         // });
//       }else{
//         // loader=false
//         dispatch({
//           type: "GETUSER",
//           payload: '',
//         });
//         // dispatch({
//         //   type: "loader",
//         //   payload: false,
//         // });
//       }
//     })
//     .catch((err) => {
//       // loader=false
//       return false;
//     })
//   }

// };


export const addUer = (user) => async (dispatch) => {
  dispatch({
    type: "ADD_USER",
    payload: user,
  });
};

export const removeUser = (id)  => {
  return {
    type: "REMOVE_USER",
    payload: id,
  }
};