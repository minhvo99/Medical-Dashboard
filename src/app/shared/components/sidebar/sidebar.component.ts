import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router : Router) { }

  menus: any[] = [
    {lable: 'dashboard', icon: 'dashboard', size: 'xxl', isActive: false},
    {lable: 'appointment', icon: 'appointment', size: 'xxl', isActive: false},
    {lable: 'doctors', icon: 'doctor', size: 'xxl', isActive: false},
    {lable: 'departments', icon: 'departments', size: 'xxl', isActive: false},
    {lable: 'patients', icon: 'patients', size: 'xxl', isActive: false},
    {lable: 'chats', icon: 'chats', size: 'xxl', isActive: false},
    {lable: 'calls', icon: 'calls', size: 'xxl', isActive: false},
  ]

  ngOnInit(): void {
  }

  activeClass(menu: any){
    const me = this;
    me.menus = me.menus.map((item: any)=> {
      let result = {...item}
      result.isActive = false

      if(menu.lable === item.lable){
        result.isActive = true
      }
      return result
    })
  }

  onActiveRoute(path : string){
    const me = this
    me.router.navigate([path])
  }

}
