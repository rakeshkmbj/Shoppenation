export class Paginator<T> {
  currentPage = 1;
  itemsPerPage: number;
  items: T[];

  constructor(items: T[], itemsPerPage: number = 10) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
  }

  get paginatedItems(): T[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.items.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  get totalItems(): number {
    return Math.ceil(this.items.length);
  }
  
  get pagesToShow(): number[] {
    const pages: number[] = [];
    const maxPagesToShow = 3;
    let startPage = Math.max(this.currentPage - 1, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, this.totalPages);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
