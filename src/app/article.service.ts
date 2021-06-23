import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  /* here is the three API request.  */

  postPublication(payload) {

    /* for reducing the payload only  some publications */
    return of(
      {
        result: [
          {
            "PubId": 2,
            "Title": "The New Indian Express",
            "MastHead": "",
            "Circulation": 45000,
            "WebSite": "www.expressbuzz.com",
            "Issn_Num": "0.4",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 3,
            "Title": "The Hindu",
            "MastHead": "",
            "Circulation": 305852,
            "WebSite": "www.thehindu.com",
            "Issn_Num": "",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 4,
            "Title": "The Economic Times",
            "MastHead": "",
            "Circulation": 22442,
            "WebSite": "http://economictimes.indiatime",
            "Issn_Num": "",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 5,
            "Title": "Business Standard",
            "MastHead": "",
            "Circulation": 5137,
            "WebSite": "www.business-standard.com",
            "Issn_Num": "",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 6,
            "Title": "Financial Express",
            "MastHead": "6.JPG",
            "Circulation": 14000,
            "WebSite": "www.thefinancialexpress.com",
            "Issn_Num": "0.4",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 7,
            "Title": "Daily Thanthi",
            "MastHead": "",
            "Circulation": 398338,
            "WebSite": "www.dailythanthi.com",
            "Issn_Num": "",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 8,
            "Title": "Dinamani",
            "MastHead": "8.JPG",
            "Circulation": 33451,
            "WebSite": "www.dinamani.com",
            "Issn_Num": "0.44",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 9,
            "Title": "Dina Malar",
            "MastHead": "9.jpg",
            "Circulation": 178893,
            "WebSite": "www.dinamalar.com",
            "Issn_Num": "",
            "Place": 156,
            "city": "Chennai"
          },
          {
            "PubId": 10,
            "Title": "The New Indian Express",
            "MastHead": "10.jpg",
            "Circulation": 15511,
            "WebSite": "www.expressbuzz.com",
            "Issn_Num": "0.4",
            "Place": 157,
            "city": "Hyderabad"
          },
          {
            "PubId": 11,
            "Title": "The Hindu",
            "MastHead": "11.jpg",
            "Circulation": 197597,
            "WebSite": "www.thehindu.com",
            "Issn_Num": "",
            "Place": 157,
            "city": "Hyderabad"
          },
          {
            "PubId": 12,
            "Title": "The Economic Times",
            "MastHead": "",
            "Circulation": 20540,
            "WebSite": "http://economictimes.indiatime",
            "Issn_Num": "",
            "Place": 157,
            "city": "Hyderabad"
          }
        ]
      }
    )


    return this.http.post(environment.api_url + '/articles/publicationData', payload)
  }

  postArticlesData(payload) {
    return this.http.post(environment.api_url + '/articles/articleslistData', payload)
  }
  
  getArticlesData(payload) {
    return this.http.post(environment.api_url + '/articles/articledetailsData', payload)
  }


  deleteArticlesData(payload) {
    return this.http.post(environment.api_url + '/articles/articlesDelete', payload)
  }

}
