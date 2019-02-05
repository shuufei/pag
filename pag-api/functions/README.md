## 利用API

- ユーザ情報の取得: [GET /users/show](https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show)
- ユーザ情報取得: 
    - [query](https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators.html)
    - [タイムライン取得](http://westplain.sakuraweb.com/translate/twitter/Documentation/REST-APIs/Public-API/Working-with-Timelines.cgi)
    - [高度な検索を組み立てる](https://twitter.com/search-advanced)

## test
curl -v -X POST https://us-central1-pag-front.cloudfunctions.net/accounts -d 'screenName=pag_account'

curl -v -X POST https://us-central1-pag-front.cloudfunctions.net/items -d 'accountId=1067438854938877953'
curl -v -X POST https://us-central1-pag-front.cloudfunctions.net/items -d 'accountId=1067438854938877953'

curl -v -X GET https://us-central1-pag-front.cloudfunctions.net/items?accountId=1067438854938877953

### Local Debug
```
% yarn build --watch
% yarn shell

accounts.post().form({ screenName: 'pag_account' })
items.post().form({ accountId: '1067438854938877953' })
items.get({qs:{accountId:'1067438854938877953'}})
```

## Localで同期する
cloudfunctionは今閉じているので、手動で同期せねばならない

```
% yarn build --watch
% yarn shell
```

```
items.post().form({ accountId: '1067438854938877953' })
```