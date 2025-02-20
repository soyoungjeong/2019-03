const { GraphQLString } = require('graphql');

const { PostDetailType } = require('../types');
const { Post } = require('../../../db');

const postDetailQuery = {
  type: PostDetailType,
  args: {
    postURL: { type: GraphQLString },
  },
  resolve: (post, args) => {
    return Post.findOne({
      where: { postURL: args.postURL },
    });
  },
};

module.exports = { postDetailQuery };
