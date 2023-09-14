import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
 
  @Input()
  photoCover:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png";
  @Input()
  contentTitle:string = "";
  @Input()
  contentDescription:string = "";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
  }
}
