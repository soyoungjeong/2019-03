module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HashTagsOfPosts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      PostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
      },
      HashTagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'HashTags',
          key: 'id',
        },
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('HashTagsOfPosts');
  },
};
