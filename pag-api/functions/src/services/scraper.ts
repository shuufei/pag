import * as client from 'cheerio-httpcli';

export async function scraping(link: string): Promise<ScrapingRes> {
  const res = await client.fetch(link);
  const title = res.$('title').text();
  const img = res.$('meta[property="og:image"]').attr('content');
  return { title, img };
}

export interface ScrapingRes {
  title: string;
  img: string;
}
