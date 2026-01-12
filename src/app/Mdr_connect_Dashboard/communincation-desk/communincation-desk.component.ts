import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Paginator} from '../../_models/pagination'

@Component({
  selector: 'app-communincation-desk',
  templateUrl: './communincation-desk.component.html',
  styleUrls: ['./communincation-desk.component.css']
})
export class CommunincationDeskComponent implements OnInit {
 modalRef!: BsModalRef;
  childModalRef: BsModalRef;
  postsPaginator: Paginator<any>;
  showResponceCentre = false;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.postsPaginator = new Paginator(this.postList, 10);
  }

  openModal(template: TemplateRef<any>) {
    if (this.childModalRef) {
      this.childModalRef.hide()
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
  }

  openChildModal(template: TemplateRef<any>, parentTemplate: TemplateRef<any>) {
    // Close parent modal first
    if (this.modalRef) {
      this.modalRef.hide();
    }

    // Open child modal
    this.childModalRef = this.modalService.show(template, { class: 'modal-lg' });

    // When child modal closes, reopen parent modal
    const subscription = this.modalService.onHide.subscribe((reason: string) => {
      if (this.childModalRef && reason === this.childModalRef.id) {
        this.openModal(parentTemplate); // reopen parent
        subscription.unsubscribe(); // cleanup
      }
    });
  }

  categoryList = ['Technology', 'Health', 'Education', 'Entertainment'];
  newPost = {
    category: '',
    title: '',
    template: 'Text',
    createdDate: '',
    detail: '',
    file: null
  };
  filePreviewUrl: string | null = null;
  isImageFile = true;

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.newPost.file = file;
    if (file) {
      this.isImageFile = file.type.startsWith('image/');
      const reader = new FileReader();
      reader.onload = () => this.filePreviewUrl = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  saveAndPublish() {
    console.log('Post Data:', this.newPost);
    // API call logic
  }

  postList = [
    {
      postId: 'P001',
      active: true,
      category: 'Technology',
      domainId: 'D001',
      createdDate: new Date('2025-08-01'),
      approved: true,
      rejected: false
    },
    {
      postId: 'P002',
      active: false,
      category: 'Health',
      domainId: 'D002',
      createdDate: new Date('2025-07-25'),
      approved: false,
      rejected: true
    },
    {
      postId: 'P003',
      active: true,
      category: 'Education',
      domainId: 'D003',
      createdDate: new Date('2025-07-30'),
      approved: true,
      rejected: false
    },
    {
      postId: 'P003',
      active: true,
      category: 'Education',
      domainId: 'D003',
      createdDate: new Date('2025-07-30'),
      approved: true,
      rejected: false
    },
    {
      postId: 'P003',
      active: true,
      category: 'Education',
      domainId: 'D003',
      createdDate: new Date('2025-07-30'),
      approved: true,
      rejected: false
    },
    {
      postId: 'P003',
      active: true,
      category: 'Education',
      domainId: 'D003',
      createdDate: new Date('2025-07-30'),
      approved: true,
      rejected: false
    }
  ];

  openResponceCentre(post: any){
    this.showResponceCentre = !this.showResponceCentre
  }

}
