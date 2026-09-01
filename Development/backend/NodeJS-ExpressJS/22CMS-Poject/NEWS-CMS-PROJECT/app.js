import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import flash from 'connect-flash';
import session from 'express-session';
import adminRoutes from './routes/admin.js';
import frontendRoutes from './routes/frontend.js';
import cookieParser from 'cookie-parser'
// import minifyHTML from 'express-minify-html-2';


const app = express();
const port = process.env.PORT || 3000;
// app.use(minifyHTML({
//     override: true,
//     htmlMinifier: {
//         removeComments: true,
//         collapseWhitespace: true,
//         collapseBooleanAttributes: true,
//         removeAttributeQuotes: true,
//         removeRedundantAttributes: true
//     }
// }));


// ======================
// MIDDLEWARE
// ======================

app.use(express.urlencoded({ extended: true ,limit:'10mb'}));
app.use(express.json({limit:'10mb'}));
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(cookieParser())
app.use(expressLayouts);
app.set('layout', 'frontend/layout');


// ======================
// VIEW ENGINE
// ======================

app.set('view engine', 'ejs');


// ======================
// DATABASE CONNECTION
// ======================

mongoose.connect(process.env.MONGO_URI);


// ======================
// ROUTES
// ======================



// Admin Layout Middleware
app.use('/admin', (req, res, next) => {
    res.locals.layout = 'admin/layout';
    next();
});
app.use('/admin', adminRoutes);
app.use('/', frontendRoutes);




//route
app.get('/', (req, res) => {
    res.send('Hello World');
});




// ======================
// 404 ROUTE
// ======================


app.listen(port, () => {

    console.log(`Server running on http://localhost:${port}`);
});