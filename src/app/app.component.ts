import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  this.getList();    

  }

  title = 'FirstApp';
  rowData:any[] = [];
  
  
  colDefs: ColDef[] = [{ field : "firstName"},];

  pagination =true;
  paginationPageSize = 20;

  constructor(private http:HttpClient){

  }
  getList(){
    this.http.get("https://dummyjson.com/users").subscribe((res:any)=>{
      this.rowData = res.users;
      console.log(res);
    })
  } 
  
  defaultColDef: ColDef = {
    flex: 1,
  };
}
