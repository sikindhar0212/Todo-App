import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  // retrieving data from backend through url in json format
  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldBean>('https://my-todo-app-siki-39282cb92d7a.herokuapp.com/hello-world-bean');
    // console.log("Execute Hello World Bean Service")
  }

  // retrieving data from backend through url *wiht parameter* in json format
  executeHelloWorldServiceWithPathVariable(name: string){
    return this.httpClient.get<HelloWorldBean>(`https://my-todo-app-siki-39282cb92d7a.herokuapp.com/hello-world/path-variable/${name}`);
  }
}
