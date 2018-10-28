## 利用API

- ユーザ情報の取得: [GET /users/show](https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show)
- ユーザ情報取得: 
    - [query](https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators.html)
    - [タイムライン取得](http://westplain.sakuraweb.com/translate/twitter/Documentation/REST-APIs/Public-API/Working-with-Timelines.cgi)
    - [高度な検索を組み立てる](https://twitter.com/search-advanced)

## test
curl -v -X POST https://us-central1-pag-front.cloudfunctions.net/accounts -d 'account=digital_shuufei'