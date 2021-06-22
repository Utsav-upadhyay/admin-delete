import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/article.service';
import { IArticle } from 'src/app/models/pub.model';

@Component({
  selector: 'app-deletearticle',
  templateUrl: './deletearticle.component.html',
  styleUrls: ['./deletearticle.component.css']
})
export class DeletearticleComponent implements OnInit {
  articleDetails: IArticle;

  constructor(private route: ActivatedRoute, private article: ArticleService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let { id } = params

      this.article
        .getArticlesData({ articleid: id })
        .subscribe((data: any) => {
          this.articleDetails = data.result[0];
          console.log(this.articleDetails);
        });
    })

  }

}
