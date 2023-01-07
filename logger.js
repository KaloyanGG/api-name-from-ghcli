import * as fs from 'fs';


export function errorLogger(req, res, next) {
    // console.log('req: ');
    // console.log(req);
    // console.log('res: ');
    // console.log(res);
    // console.log('next: ');
    // console.log(next);
    // fs.appendFile('error.log', `${err.message}\n`, (error) => {
    //     if (error) throw error;
    // });
    // next(err);

    console.log('errorLogger');
    next();
}
