import auth from 'basic-auth'
import * as http from 'http';
import * as http2 from 'http2';

const admins = {
    'username': { password: 'hogehoge' }
}

export default function (req: http.IncomingMessage | http2.Http2ServerRequest, res, next)  {
    const user = auth(req)
    // strictにしたときの書き方をしっかりとしておく！
    if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
        res.set('WWW-Authenicate', 'Basic realm="example"')
        return res.status(401).send()
    }
    return next()
}