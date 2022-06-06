import { BehaviorSubject, Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';

interface Action {
  name: string,
  status: boolean
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public searchInfo = {
    input: ''
  };

  private debouceTimeSearch = 400;

  private search$ = new BehaviorSubject<string>('');

  private destroy$ = new Subject<void>();

  actions!: Action[];

  selectedCity1!: Action;

  constructor(private searchService: SearchService) { 
    this.actions = [
      {name: 'Action 1', status: true},
      {name: 'Action 2', status: true},
      {name: 'Action 3', status: true},
  ];
  }

  ngOnInit() {
    const me = this;
    me.regisSearchEvent();
  }

  private regisSearchEvent(): void {
    const me = this;
    me.search$.pipe(
      takeUntil(me.destroy$),
      distinctUntilChanged(),
      debounceTime(me.debouceTimeSearch),
      switchMap(keyword => {
        return me.searchService.search(keyword);
      })).subscribe(
      );
  }

  public onChangeSearchInput(): void {
    const me = this;
    me.search$.next(me.searchInfo.input);
    console.log(me.searchInfo.input);  
  }

}
