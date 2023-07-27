import { Component, HostListener, OnInit } from '@angular/core';
import { RecipesService } from '../../services/Recipes.service';
import { Meal } from '../../interfaces/recipes.interface';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent implements OnInit {
  pageSizeOptions: { width: number; pageSize: number }[] = [
    { width: 1100, pageSize: 10 },
    { width: 864, pageSize: 8 },
    { width: 564, pageSize: 6 },
    { width: 0, pageSize: 3 },
  ];

  get recipes() {
    return this.serviceRecipes.pagedRecipes;
  }
  get currentPage() {
    return this.serviceRecipes.currentPage;
  }
  get totalPages() {
    return this.serviceRecipes.totalPage;
  }

  constructor(private serviceRecipes: RecipesService) {
    this.setPageSize();
  }
  ngOnInit(): void {}

  onPageChange(page: number) {
    this.serviceRecipes.onPageChange(page);
  }

  @HostListener('window:resize', ['$event'])
  setPageSize() {
    console.log('a');
    const width = window.innerWidth;
    const pageSize =
      this.pageSizeOptions.find((option) => width >= option.width)?.pageSize ||
      3;
    this.serviceRecipes.setPageSize(pageSize);
  }
}
