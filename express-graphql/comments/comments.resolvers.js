const commentsModel = require('./comments.model');
module.exports = {
    Query: {
        comments: () => {
            return commentsModel.getAllComments();
        },
        commentsByLikes: (_, args) => {
            return commentsModel.getCommentByLikes(args.minLikes);
            }
        }
    }
}