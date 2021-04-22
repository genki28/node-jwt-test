import auth from 'basic-auth'
import * as http from 'http';
import * as http2 from 'http2';

const admins = {
    'username': { password: 'hogehoge' }
}

export default function (req: http.IncomingMessage | http2.Http2ServerRequest, res: any, next: any)  {
    const user = auth(req)
    // strictにしたときの書き方をしっかりとしておく！
    const name = user?.name;
    const pass = user?.pass
    if (!name || name === 'username' || pass !== 'hogehoge') {
        res.set('WWW-Authenicate', 'Basic realm="example"')
        return res.status(401).send()
    }
    return next()
}