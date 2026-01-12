import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Paginator } from '../../_models/pagination'
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {
  modalRef!: BsModalRef;
  childModalRef: BsModalRef;
  postsPaginator: Paginator<any>;
  showResponceCentre = false;
  selectedImageUrl: string | ArrayBuffer | null = null;
  selectedVideoUrl: string | ArrayBuffer | null = null;
  selectedFileBase64 = '';

  constructor(
    private modalService: BsModalService,
    private apiService: ApiService,
    private toastr: ToastrService) { }

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
    timezone: '',
    industry: '',
    platform: '',
    audience: '',
    category: '',
    subcategory: '',
    postCategory: '',
    title: '',
    template: '',
    detail: '',
    file: null,
    createdDate: ''
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

   onFileSelect(event: any, type: string) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64WithPrefix = reader.result as string;
        const base64String = base64WithPrefix.split(',')[1];

        this.selectedFileBase64 = base64String;

        if (type === 'image') {
          this.selectedImageUrl = base64WithPrefix;
        } else if (type === 'video') {
          this.selectedVideoUrl = base64WithPrefix;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  // saveAndPublish() {
  //   console.log('Post Data:', this.newPost);
  //   // API call logic
  // }


  saveAndPublish() {

    const payload = {
      // Storecode: this.B2bData.GLB_Login_Ecom_storecode,
      Storecode: "1001070099",
      Domainid: "3",
      PostCategoryid: this.newPost.postCategory,
      PostTitle: this.newPost.title,
      TxtImgFlg: this.newPost.template === 'Text & Image',
      TxtVdoFlg: this.newPost.template === 'Text & Video',
      PostDetailTxt: this.newPost.detail,
      PostMedia: this.selectedFileBase64,
      Posttag1: 1,
      Posttag2: 3,
      Posttag3: 1,
      Posttag4: 2,
      Posttag5: 3
    };

    console.log("Payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/ADD_MDR_Storepost', payload)
      .subscribe({
        next: (data) => {
          console.log(data);

          const publish = {
            Postid: data.PostId,
            UserId: "1100070132"
          }

          this.apiService.postCall(this.apiService.baseURL + '/Publish_MDRDistribute_post', publish)
            .subscribe(data => {
              console.log(data);

              this.toastr.success(data, "", { timeOut: 5000 });

            }, error => {
              console.log(error);

            });

        },
        error: (error) => {
          this.toastr.error(error.error.Message, '', { timeOut: 5000 });
        }
      });

      this.modalRef.hide();

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

  openResponceCentre(post: any) {
    this.showResponceCentre = !this.showResponceCentre
  }

}
