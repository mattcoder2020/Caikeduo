import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from '@proxy/caikdduopos/application-services/payment-method.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { storeStatusOptions } from '@proxy/caikdduopos/enums';
import { NgbdDatepickerRangePopup} from '../../shared/date-picker/date-picker.component';
import { Router } from '@angular/router';
import { PaymentMethodDto } from '@proxy/caikdduopos/dto';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class PaymentmethodComponent implements OnInit{
  PaymentMethods = { items: [], totalCount: 0 } as PagedResultDto<PaymentMethodDto>;
  form: FormGroup; // add this line

  selectedPaymentMethod = {} as PaymentMethodDto;
  //queryDto = {} as ProductQueryDto;


  isModalOpen = false;
  constructor(public readonly list: ListService, 
    private PaymentMethodService: PaymentMethodService,
    private fb: FormBuilder, 
    private confirmation: ConfirmationService,
    private router: Router) 
  {}

  ngOnInit() {

    const PaymentMethodStreamCreator = (query) => this.PaymentMethodService.getList(query);

    this.list.hookToQuery(PaymentMethodStreamCreator).subscribe((response) => {
      this.PaymentMethods = response;
    });
  }

  create() {
    this.selectedPaymentMethod = {} as PaymentMethodDto;
    this.buildForm(); // add this line
    this.isModalOpen = true;
  }

  edit(id: number) {
    this.PaymentMethodService.get(id).subscribe((Product) => {
      this.selectedPaymentMethod= Product;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

   delete(id: number) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.PaymentMethodService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  // add buildForm method
  buildForm() {
    this.form = this.fb.group({
      id: [this.selectedPaymentMethod.id|| null],
      name: [this.selectedPaymentMethod.name|| null, Validators.required],
      description: [this.selectedPaymentMethod.description|| null, Validators.required],
      isDefault: [this.selectedPaymentMethod.isDefault|| null, Validators.required]   
              });
  }

  navigatetoproduct()
  {
    this.router.navigate(['/product/productlist']);
    //add code to nagivate to productlist route

  }
  // add save method
  save() {
    if (this.form.invalid) {
      return;
    }
    const request = this.selectedPaymentMethod.id
    ? this.PaymentMethodService.update(this.selectedPaymentMethod.id, this.form.value)
    : this.PaymentMethodService.create(this.form.value);

    request.subscribe(() => {
    this.isModalOpen = false;
    this.form.reset();
    this.list.get();
    });
   
  }


}
