## 利用API

- ユーザ情報の取得: [GET /users/show](https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show)
- ユーザ情報取得: 
    - [query](https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators.html)
    - [タイムライン取得](http://westplain.sakuraweb.com/translate/twitter/Documentation/REST-APIs/Public-API/Working-with-Timelines.cgi)
    - [高度な検索を組み立てる](https://twitter.com/search-advanced)

## test
curl -v -X POST https://us-central1-pag-front.cloudfunctions.net/accounts -d 'screenName=digital_shuufei'

curl -v -X POST https://us-central1-pag-front.cloudfunctions.net/items -d 'accountId=775003201338683393'
curl -v -X POST https://us-central1-pag-front.cloudfunctions.net/items -d 'accountId=1067438854938877953'

curl -v -X GET https://us-central1-pag-front.cloudfunctions.net/items?accountId=775003201338683393

### Local Debug
```
% yarn build --watch
% yarn shell

accounts.post().form({ screenName: 'digital_shuufei' })
items.post().form({ accountId: '775003201338683393' })
items.get({qs:{accountId:'775003201338683393'}})
```

## get items
**TODO: 一度に全てやるとしんどいな**
- 対象アカウントの最新tweet以降で#pagがついているツイートを全て取得
- もっとも最新のtweetのidをdbに登録
- 取得したツイートのurlをスクレイピング
- スクレイピングの結果とツイートの結果を元にitemを生成し、dbに登録
- responseとして、全てのitem情報を返す
