const { User } = require("../models");
const { signToken } = require("../utils/auth")

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        try {
          const user = await User.findOne({ _id: context.user._id });
          return user;
        } catch (error) {
          throw new Error("Error fetching user data");
        }
      }
      throw new AuthenticationError("User not authenticated");
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log(user)
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  

  saveBook: async (parent, { book }, context) => {
    try {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: book } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      } else {
        throw new AuthenticationError("User not authenticated");
      }
    } catch (error) {
      console.error("Error saving book:", error.message);
      throw new Error("Error saving book");
    }
  },

  removeBook: async (parent, { bookId }, context) => {
    if (context.user) {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
    }
    throw AuthenticationError("There was an error in removing the book");
  },
}
}



module.exports = resolvers;
