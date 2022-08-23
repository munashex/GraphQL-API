const {userList} = require("../dummyData") 
const _ = require('lodash')


const resolvers = {
    Query:{
        users: () => {
            return userList
        }, 
        
        user:(parent, args) => {
         let id = args.id 
         let user = _.find(userList, {id: Number(id)}) 
         return user 
        },

         username:(parent, args) => {
            let name = args.name 
            let single = _.find(userList, {name}) 
            return single
         }
    }, 

   Mutation:{
    createUser:(parent, args) => {
        let  user = args.input 
        let lastId = userList[userList.length - 1].id 
        user.id  = lastId + 1
        userList.push(user) 
        return user
    },

    deleteUser:(parent, args) => {
      let id = args.id 
      _.remove(userList, (user) => user.id === Number(id)) 
      return null;
    },

    updateUser:(parent, args) => {
       const {id, newName} = args.input  
       let userUpdated;
       userList.forEach((user) => {
        if(user.id === id) {
            user.name = newName
            userUpdated = user
        }
       })
       return userUpdated
    }

  
   },

  
}

module.exports = {resolvers}