require('dotenv').config();

module.exports = {
  env: {
    templateId: process.env.templateId,
    userID: process.env.userID
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};
