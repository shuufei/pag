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
          img: 'https://pbs.twimg.com/profile_images/1095319561493041152/fx4sCj-5_bigger.jpg',
          name: 'fei',
          accountId: 'digital_fei'
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
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const data = [
    //     ];
    //     const items: Item[] = this.convertItems(data);
    //     return resolve(items);
    //   }, 500);
    // });
    const httpOptions = {
      params: new HttpParams().set('accountId', account.id)
    };
    return new Promise((resolve, reject) => {
      this.http.get(`${this.ENDPOINT}/items`, httpOptions).subscribe((data: any[]) => {
        const items: Item[] = this.convertItems(data);
        resolve(items);
        return;
      }, error => reject(error));
    });
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
