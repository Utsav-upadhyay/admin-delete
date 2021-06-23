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
  showModal: boolean;
  userId: string;
  username: string;

  constructor(private route: ActivatedRoute, private article: ArticleService) { }

  ngOnInit(): void {

    this.userId = localStorage.getItem('userid')
    this.username = localStorage.getItem('username')

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


  deleteArticle(id) {

    console.log(this.userId, this.username);

    if (confirm('Are you sure you want to delete?')) {
      this.article.deleteArticlesData({ articleid: id }).subscribe(data => {
        console.log(data);
      })
    }
  }

  openModal() {
    this.showModal = true
    document.querySelector('body').classList.add('modal-open')
  }

  closeModal() {
    this.showModal = false
    document.querySelector('body').classList.remove('modal-open')
  }

}
