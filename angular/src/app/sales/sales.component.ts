import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from '@proxy/caikdduopos/application-services/payment-method.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { storeStatusOptions } from '@proxy/caikdduopos/enums';
import { NgbdDatepickerRangePopup} from '../shared/date-picker/date-picker.component';
import { Router } from '@angular/router';
import { PaymentMethodDto, SalesOverViewDto } from '@proxy/caikdduopos/dto';
import { SalesService } from '@proxy/caikdduopos/application-services';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class SalesComponent implements OnInit{
  Saleoverviews : SalesOverViewDto[] = [];
  form: FormGroup; // add this line

  selectedPaymentMethod = {} as PaymentMethodDto;
  //queryDto = {} as ProductQueryDto;


  isModalOpen = false;
  constructor(public readonly list: ListService, 
    private SaleService: SalesService,
    private fb: FormBuilder, 
    private confirmation: ConfirmationService,
    private router: Router) 
  {}

  ngOnInit() {

    this.SaleService.getSalesOverView().subscribe((response) => {
      this.Saleoverviews = response;
    });
  }


}