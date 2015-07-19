/**
 * Created by Thanhnv on 7/19/2015.
 */
exports.angularShow = function(req, res, next) {
    req.collections.articles.find({},{sort: {_id:-1}}).toArray(function(error, articles) {
        if (error) return next(error);
        res.render('admin',{articles:articles});
    });
};