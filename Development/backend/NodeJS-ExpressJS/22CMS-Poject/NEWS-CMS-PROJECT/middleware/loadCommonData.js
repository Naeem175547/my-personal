import Category from "../models/Category.js";
import News from "../models/News.js";
import User from "../models/User.js";
import Setting from "../models/setting.js";
import NodeCache from 'node-cache';

const cache = new NodeCache();

const loadCommonData = async (req, res, next) => {

    try {

        let latestNews = cache.get('latestNewsCache');
        let categories = cache.get('categoriesCache');
        let settings = cache.get('settingsCache');

        if (!latestNews || !categories || !settings) {
            settings = await Setting.findOne().lean();
            latestNews = await News.find()
                .sort({ date: -1 })
                .limit(5)
                .populate('category', 'name slug')
                .populate('author', 'fullname')
                .lean();

            const categoriesInUse =
                await News.distinct('category');

            categories = await Category.find({
                _id: { $in: categoriesInUse }
            }).lean();


            // Cache Data
            cache.set('latestNewsCache', latestNews, 3600);
            cache.set('categoriesCache', categories, 3600);
            cache.set('settingsCache', settings, 3600);
        }


        // Global Variables for Views

        res.locals.settings = settings;
        res.locals.latestNews = latestNews;
        res.locals.categories = categories;
        next();

    }
    catch (err) {

        console.error(err);

        next(err);
    }
};

export default loadCommonData;