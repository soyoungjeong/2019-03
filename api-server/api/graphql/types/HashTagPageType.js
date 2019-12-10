const { GraphQLObjectType, GraphQLBoolean, GraphQLList } = require('graphql');

const { PostCardType } = require('./PostCardType');
const { Post } = require('../../../db');

const HashTagPageType = new GraphQLObjectType({
  name: 'hashTagPageType',
  fields: () => ({
    isExistingHashTag: {
      type: GraphQLBoolean,
      resolve: data => data.isExistingHashTag,
    },
    postCard: {
      type: new GraphQLList(PostCardType),
      resolve: data => {
        const postCards = data.postIds.map(async postId => {
          const postCard = await Post.findOne({
            attributes: ['postURL', 'imageURL'],
            where: { id: postId.PostId },
          });
          return postCard;
        });
        return postCards;
      },
    },
  }),
});

module.exports = { HashTagPageType };
