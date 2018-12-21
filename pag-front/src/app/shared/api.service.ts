import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Account } from 'src/app/components/molecules/account-name/account-name.component';
import { Item } from 'src/app/components/organisms/item/item.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ENDPOINT = 'https://us-central1-pag-front.cloudfunctions.net';

  constructor(
    private http: HttpClient
  ) { }

  getAccount(screenName: string): Promise<GetAccountResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          id: '1067438854938877953',
          img: 'http://pbs.twimg.com/profile_images/1067441933017001984/VLuTkx6a.jpg',
          name: 'pag',
          accountId: 'pag_account'
        });
      }, 500);
    });
    // return new Promise((resolve, reject) => {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   };
    //   this.http.post(`${this.ENDPOINT}/accounts`, { screenName }, httpOptions)
    //     .subscribe((data: any) => {
    //       const account: GetAccountResponse = {
    //         id: data.id,
    //         accountId: data.screenName,
    //         name: data.name,
    //         img: data.img
    //       };
    //       resolve(account);
    //       return;
    //     }, error => reject(error));
    // });
  }

  async getItems(account: Account): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = [
          {"accountId":"1067438854938877953","comment":"","id":"1067442594676785153","tags":["javascript","test"],"createdAt":"2018-11-27T15:38:41.000Z","title":"An Overview of JavaScript Testing in 2018 – Welldone Software – Medium","img":"https://cdn-images-1.medium.com/max/1200/1*yt0amuDg5VL3QtomaZHvNA.png","url":"https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3"},{"img":null,"url":"https://2018.stateofjs.com/introduction/","accountId":"1067438854938877953","comment":"2018のjavascriptの状況。front-end frameworkとかテストツールとか","id":"1067443190746177537","tags":["javascript"],"createdAt":"2018-11-27T15:41:03.000Z","title":"The State of JavaScript 2018: Introduction"},{"accountId":"1067438854938877953","comment":"web上でのtypographyのリズム","id":"1067446455961477120","tags":["design","typography"],"createdAt":"2018-11-27T15:54:01.000Z","title":"Rhythm in Web Typography | Better Web Type","img":"http://betterwebtype.com/assets/images/bwt-rhythm.jpg","url":"https://betterwebtype.com/rhythm-in-web-typography"},{"accountId":"1067438854938877953","comment":"javascript基礎","id":"1067446608676044800","tags":["javascript"],"createdAt":"2018-11-27T15:54:38.000Z","title":"JavaScriptを言語仕様から把握し、ライブラリに振り回されない漢を目指す人に贈るJavaScriptの基礎 - QiitaQiita","img":"https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png","url":"https://qiita.com/hakozaru/items/c00e472ab0f5e823098c"},{"accountId":"1067438854938877953","comment":"vueで作られたdesign system","id":"1067447418248093696","tags":["vue","design_system"],"createdAt":"2018-11-27T15:57:51.000Z","title":"GitHub - viljamis/vue-design-system: An open source tool for building UI Design Systems with Vue.js","img":"https://avatars2.githubusercontent.com/u/671836?s=400&v=4","url":"https://github.com/viljamis/vue-design-system"},{"accountId":"1067438854938877953","comment":"fontの組み合わせかた","id":"1067447630697967616","tags":["design","typography"],"createdAt":"2018-11-27T15:58:42.000Z","title":"A Guide to Combining Fonts | Better Web Type","img":"http://betterwebtype.com/bwt-combining-fonts-guide.jpg","url":"https://betterwebtype.com/combining-fonts-guide"},{"accountId":"1067438854938877953","comment":"69のtool summary","id":"1067447825942761472","tags":["design","tool"],"createdAt":"2018-11-27T15:59:28.000Z","title":"💥 69 Fantastic Tools in 2 months! – Prototypr","img":"https://cdn-images-1.medium.com/max/1200/0*VWQ2r2qNwABc-8Lg.png","url":"https://blog.prototypr.io/69-fantastic-tools-in-2-months-6736f46121b9"},{"accountId":"1067438854938877953","comment":"logo作るときの参考サイトまとめ","id":"1067448280450162688","tags":["design","logo"],"createdAt":"2018-11-27T16:01:16.000Z","title":"ロゴデザインを始めたいあなたへ！ロゴデザインの主な種類と参考になるウェブサイトまとめ | Goodpatch Blog","img":"https://goodpatch.com/blog/wp-content/uploads/2018/01/etageegh54.jpg","url":"https://goodpatch.com/blog/logo-design-inspiration/"},{"accountId":"1067438854938877953","comment":"Handbook by invision","id":"1067448538370519041","tags":["design_system"],"createdAt":"2018-11-27T16:02:18.000Z","title":"Design Systems Handbook - DesignBetter.Co:: owl","img":"https://s3.amazonaws.com/designco-web-assets/uploads/2017/11/Design-Systems-1200x630.png","url":"https://www.designbetter.co/design-systems-handbook"},{"accountId":"1067438854938877953","comment":"","id":"1067448686479699968","tags":["pwa"],"createdAt":"2018-11-27T16:02:53.000Z","title":"やばい、iOSにネイティブアプリ要らなくなるかも。SafariもPWAに対応する可能性 - QiitaQiita","img":"https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png","url":"https://qiita.com/Yatima/items/b9f1962da1a304dc7604"},{"img":"https://cdn-images-1.medium.com/max/1200/1*-e1b6KOOUEcg5Z0MaZ299w.png","url":"https://blog.prototypr.io/10-basic-principles-of-visual-design-55b86b9f7241","accountId":"1067438854938877953","comment":"visual designの原則","id":"1067448876662120449","tags":["design","principle"],"createdAt":"2018-11-27T16:03:39.000Z","title":"10 Basic Principles of Visual Design – Prototypr"},{"img":"https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/5311701/rectangle_large_7fd4334c145b74447c9fc914331913f5.jpg","url":"https://note.mu/masa8aru/n/n33e7a43841ac","accountId":"1067438854938877953","comment":"UIトレース時の参考","id":"1067449072817078272","tags":["design","ui"],"createdAt":"2018-11-27T16:04:25.000Z","title":"\nUIトレースの学びを振り返る - キレイに真似るから次のステップへ｜Masaki Haruta｜note\n"},{"id":"1067449321224757248","tags":["design_system"],"createdAt":"2018-11-27T16:05:25.000Z","title":"Design Systems Sprint 0: The Silver Bullet of Product Development.","img":"https://cdn-images-1.medium.com/max/1200/1*MVXYGQQpXAc8LNyWqCWxOg.jpeg","url":"https://medium.com/@marcintreder/design-systems-sprint-0-the-silver-bullet-of-product-development-8c0ed83bf00d","accountId":"1067438854938877953","comment":""},{"accountId":"1067438854938877953","comment":"reduxの思想をもとに作られたやつ","id":"1067449687941083136","tags":["angular","状態管理"],"createdAt":"2018-11-27T16:06:52.000Z","title":"GitHub - ngrx/platform: Reactive libraries for Angular","img":"https://avatars2.githubusercontent.com/u/16272733?s=400&v=4","url":"https://github.com/ngrx/platform"},{"accountId":"1067438854938877953","comment":"angularでの状態管理方法について","id":"1067449972243628032","tags":["angular","状態管理"],"createdAt":"2018-11-27T16:08:00.000Z","title":"RxJSを活用したAngularアプリの状態管理設計","img":"https://s3.amazonaws.com/media-p.slid.es/thumbnails/abd29b8762a5712a759b53894f5f1ee7/thumb.jpg?497784066","url":"http://slides.com/adwd/angular-state-management"},{"createdAt":"2018-11-27T16:08:40.000Z","title":"Text Styles Mastery with Sketch 52 – Design + Sketch – Medium","img":"https://cdn-images-1.medium.com/max/1200/1*yHsLvSwicJVKM9CcdRooYA.png","url":"https://medium.com/sketch-app-sources/text-styles-mastery-with-sketch-52-dc00c7fe1aa6","accountId":"1067438854938877953","comment":"sketchでもtext style管理方法","id":"1067450142884691969","tags":["design","tool","sketch"]},{"img":"https://cdn-images-1.medium.com/max/1200/1*gNKdf-F_NwHcfZELWihSxg.gif","url":"https://blog.prototypr.io/ux-design-tools-for-2018-for-mac-and-pc-320a7be230c9","accountId":"1067438854938877953","comment":"","id":"1067450313538293760","tags":["design","tool"],"createdAt":"2018-11-27T16:09:21.000Z","title":"UX Design Tools for 2018 (For Mac AND PC) – Prototypr"},{"img":"//cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1b028712-5289-4ae1-a57c-98a58f1d138e/1-best-practices-for-mobile-form-design-800w.jpg","url":"https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/","accountId":"1067438854938877953","comment":"formを設計するときの参考","id":"1067450470094987264","tags":["design","ui","form"],"createdAt":"2018-11-27T16:09:58.000Z","title":"Best Practices For Mobile Form Design — Smashing MagazineSearchClear SearchBack to top"},{"img":"https://cdn-images-1.medium.com/max/1200/1*P3b-lB3BUd0T8ktHSoCW5g.jpeg","url":"https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f","accountId":"1067438854938877953","comment":"管理する6種類の状態について","id":"1067451088771592192","tags":["angular","状態管理"],"createdAt":"2018-11-27T16:12:26.000Z","title":"Managing State in Angular Applications – nrwl"},{"accountId":"1067438854938877953","comment":"interface designにおける原則","id":"1067451366698770432","tags":["design","principle"],"createdAt":"2018-11-27T16:13:32.000Z","title":"The Psychology of Design · An A List Apart Article","img":"https://alistapart.com/d/psychology-of-design.jpg","url":"https://alistapart.com/article/psychology-of-design"},{"accountId":"1067438854938877953","comment":"event loopについて。Promiseとかsettimeoutとか","id":"1067451537125830656","tags":["javascript"],"createdAt":"2018-11-27T16:14:13.000Z","title":"Understanding Asynchronous JavaScript — the Event Loop","img":"https://cdn-images-1.medium.com/max/1200/0*wO-kYdN93deiT0U9","url":"https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff"},{"img":"https://cdn-images-1.medium.com/max/1200/1*Ws3HHaFTkfdTWfg7qF6OfA.jpeg","url":"https://blog.bitsrc.io/understanding-change-detection-strategies-in-angular-d4ca7744085a","accountId":"1067438854938877953","comment":"change detectionについて理解する","id":"1067451818802728960","tags":["angular"],"createdAt":"2018-11-27T16:15:20.000Z","title":"Understanding Change Detection Strategies in Angular"},{"createdAt":"2018-11-28T16:33:28.000Z","title":"光を超えるためのフロントエンドアーキテクチャ - Speaker Deck","img":"https://speakerd.s3.amazonaws.com/presentations/ff742a53459c4a9090e01f84cd1c42a0/slide_0.jpg?477894","url":"https://speakerdeck.com/mizchi/guang-wochao-erutamefalsehurontoendoakitekutiya","accountId":"1067438854938877953","comment":"cacheの制御とか、preloadとかの話","id":"1067818769630674944","tags":["html5j_2018","performance"]},{"id":"1067819164918702086","tags":["html5j_2018","pwa","performance"],"createdAt":"2018-11-28T16:35:02.000Z","title":"PWA導入の成果と課題 / nikkei-pwa-html5conf2018 - Speaker Deck","img":"https://speakerd.s3.amazonaws.com/presentations/0309b649c4ab42529afe5160c4bad351/slide_0.jpg?477888","url":"https://speakerdeck.com/sisidovski/nikkei-pwa-html5conf2018","accountId":"1067438854938877953","comment":"日経電子版にPWAを取り入れた話"},{"img":"https://speakerd.s3.amazonaws.com/presentations/9fa78a2303634b4480e97624e74cdff6/slide_0.jpg?477919","url":"https://speakerdeck.com/koumatsumot0/angular-webahurikesiyonfalsezui-xin-she-ji-shou-fa","accountId":"1067438854938877953","comment":"component, module, state manageについて","id":"1067819443772739584","tags":["html5j_2018","angular"],"createdAt":"2018-11-28T16:36:09.000Z","title":"Angular Webアプリケーションの最新設計手法.pdf - Speaker Deck"},{"accountId":"1067438854938877953","comment":"","id":"1067819557375565824","tags":["html5j_2018","web_component"],"createdAt":"2018-11-28T16:36:36.000Z","title":"Web Components のリアル/ Realistic Web Components - Speaker Deck","img":"https://speakerd.s3.amazonaws.com/presentations/e36a15499bf84c49939ad3df392e03f9/slide_0.jpg?477895","url":"https://speakerdeck.com/aggre/realistic-web-components"},{"accountId":"1067438854938877953","comment":"AngularでStoryBookをつかい、コンポーネントリストを作成する方法","id":"1068878008612614145","tags":["angular","storybook"],"createdAt":"2018-12-01T14:42:30.000Z","title":"AngularでStorybookを使う - QiitaQiita","img":"https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png","url":"https://qiita.com/shuuhei/items/a79c3c6d90dcd44e08ba"},{"id":"1072483354887499776","tags":["angular","change_detection"],"createdAt":"2018-12-11T13:28:52.000Z","title":"🚀 A Comprehensive Guide to Angular onPush Change Detection Strategy","img":"https://cdn-images-1.medium.com/max/1200/1*9x6XbyBCpnMqHogB3EdqDg.jpeg","url":"https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4","accountId":"1067438854938877953","comment":"change detectionを理解して、パフォーマンスをあげる"},{"img":null,"url":"https://lawsofux.com/","accountId":"1067438854938877953","comment":"Laws of UX","id":"1072503315697725440","tags":["ux","principle"],"createdAt":"2018-12-11T14:48:11.000Z","title":"Home | Laws of UX"},{"accountId":"1067438854938877953","comment":"SSL/TLSの仕組み","id":"1074254539967016961","tags":["security","ssl_tls"],"createdAt":"2018-12-16T10:46:55.000Z","title":"","img":null,"url":"https://www.jstage.jst.go.jp/article/itej/69/3/69_228/_pdf"},{"createdAt":"2018-12-16T10:47:53.000Z","title":"The Cost Of JavaScript In 2018 – Addy Osmani – Medium","img":"https://cdn-images-1.medium.com/max/1200/1*hC5nScgHF5dGYOFUvA4kSQ.jpeg","url":"https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4","accountId":"1067438854938877953","comment":"Javascriptにかかるコストについて","id":"1074254782158626816","tags":["javascript","performance"]}
        ];
        const items: Item[] = this.convertItems(data);
        return resolve(items);
      }, 500);
    });
    // const httpOptions = {
    //   params: new HttpParams().set('accountId', account.id)
    // };
    // return new Promise((resolve, reject) => {
    //   this.http.get(`${this.ENDPOINT}/items`, httpOptions).subscribe((data: any[]) => {
    //     const items: Item[] = this.convertItems(data);
    //     resolve(items);
    //     return;
    //   }, error => reject(error));
    // });
  }

  async syncItems(account: Account): Promise<any> {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return resolve([]);
      // this.http.post(`${this.ENDPOINT}/items`, { accountId: account.id }, httpOptions)
      //   .subscribe((data: any) => {
      //     const items: Item[] = this.convertItems(data);
      //     resolve(items);
      //     return;
      //   }, error => reject(error));
    });
  }

  private convertItems(data): Item[] {
    const items: Item[] = data.map(d => {
      return {
        id: d.id,
        title: d.title,
        comment: d.comment,
        thumbUrl: d.img,
        url: d.url,
        tags: d.tags.map(t => ({ label: t, active: false })),
        star: false,
        createdAt: new Date(d.createdAt)
      };
    });
    return items;
  }

}

export interface GetAccountResponse {
  id: string;
  accountId: string;
  name: string;
  img: string;
}
