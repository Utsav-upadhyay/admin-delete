import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { IArticle, IPub } from '../models/pub.model';

declare const $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DatePipe],
})
export class MainComponent implements OnInit {
  selectedDate: string;
  selectedPub: IPub;
  publications: IPub[];
  articles: any[];
  selectedArticle: { ArticleID: string; Title: string };
  articleDetails: IArticle;
  articleTitle: any;
  yesterday = new Date();

  constructor(private article: ArticleService) {

  }

  ngOnInit(): void {
    /* Toggel the Menu */

    $('#menu-toggle').click(function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });

    /* API Call for publications when page load */

    this.article.postPublication(null).subscribe((data: any) => {
      this.publications = data.result;
      console.log(this.publications);
    });
  }

  onFocusPublication() {
    console.log(this.selectedDate);
  }

  /* POST article with PUB id and Date */

  postArticles() {
    if (!this.selectedPub ) {
      return alert('Please select a Date and publication first!');
    }

    this.article
      .postArticlesData({
        pubid: this.selectedPub.PubId,
        pubdate: this.selectedDate,
      })
      .subscribe((data: any) => {
        this.articles = data.result || [];
      });
  }

  /* When article gets clicked */
  onClickArticle(article) {
    // console.log(article);
    this.articleTitle = article.Title;
    this.selectedArticle = article;
    this.articles = [];
  }

  /* ON pub change */
  onPubChange() {
    console.log(this.selectedDate, this.selectedPub);
  }

  /* ON submit form */
  onSubmit() {
    if (this.selectedArticle && this.selectedDate && this.selectedPub) {
      this.article
        .getArticlesData({ articleid: this.selectedArticle.ArticleID })
        .subscribe((data: any) => {
          this.articleDetails = data.result[0];
          console.log(this.articleDetails);
        });
    } else {
      alert('Please select Caldendar, and Publication');
    }
  }
}
