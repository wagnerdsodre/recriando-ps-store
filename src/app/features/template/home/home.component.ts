import { Component, inject, Inject, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/core/fake-api.service';

interface DataGames {
 id:string,
 title:string,
 url:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private service = inject(FakeApiService)
  dataSource:DataGames[]= []


  ngOnInit(): void {
    this.service.loadGames().subscribe({
      next:(res)=>{
        this.dataSource = res.body
        console.log(this.dataSource)

      }
    })
  }

}
