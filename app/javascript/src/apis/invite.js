import axios from 'axios';

const invite = (payload) => axios.post('/api/users/invitation', payload)

const acceptInvite = (payload) => {
  console.log(payload)
  return axios.patch('/api/users/invitation', payload)}

const inviteApi = {
  invite,
  acceptInvite
}

export default inviteApi