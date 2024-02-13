const { Book, User } = require("../models");

const resolvers = {
  Query: {
    user: async (_, { id, username }) => {
      const query = {};
      if (id) {
        query._id = id;
      }
      if (username) {
        query.username = username;
      }
      try {
        const foundUser = await User.findOne(query);
        if (!foundUser) {
          throw new Error("User not found");
        }
        return foundUser;
      } catch (error) {
        throw new Error(`Error fetching user`);
      }
    },
  },

  Mutation: {},
};

module.exports = resolvers;
