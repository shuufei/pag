export class ResponseManager {
  setCorsHeader(res) {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Request-Headers', '*');
  }

  returnErr(res, status: number) {
    const statusCode = status ? status : 500;
    return res.status(status).send(statusCode);
  }
}

