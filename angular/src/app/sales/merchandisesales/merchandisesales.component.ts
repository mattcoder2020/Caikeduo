import { Component, OnInit } from '@angular/core';
import { MerchandiseSalesService } from '@proxy/caikdduopos/application-services/merchandise-sales.service';
import { PaymentMethodService } from '@proxy/caikdduopos/application-services/payment-method.service';
import { SalesRepService } from '@proxy/caikdduopos/application-services/sales-rep.service';
import { ProductService } from '@proxy/caikdduopos/application-services/product.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerRangePopup} from '../../shared/date-picker/date-picker.component';
import { Router } from '@angular/router';
import { MemberDto, MerchandiseSalesDto, PaymentMethodDto, ProductDto, SalesDto, SalesRepDto } from '@proxy/caikdduopos/dto';
import { MemberService } from '@proxy/caikdduopos/application-services';
import { CreateMerchandiseSalesDto, CreateSalesDto } from '@proxy/caikdduopos/dto/create';


@Component({
  selector: 'app-merchandisesales',
  templateUrl: './merchandisesales.component.html',
  styleUrls: ['./merchandisesales.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class MerchandisesalesComponent implements OnInit{
  MerchandiseSales = { items: [], totalCount: 0 } as PagedResultDto<MerchandiseSalesDto>;
  Products = { items: [], totalCount: 0 } as PagedResultDto<ProductDto>;
  Members = { items: [], totalCount: 0 } as PagedResultDto<MemberDto>;
  PaymentMethods = { items: [], totalCount: 0 } as PagedResultDto<PaymentMethodDto>;
  
  SalesReps = { items: [], totalCount: 0 } as PagedResultDto<SalesRepDto>;
  form: FormGroup; // add this line

  selectedMerchandiseSales = {} as MerchandiseSalesDto;
  //queryDto = {} as ProductQueryDto;


  isModalOpen = false;
  constructor(public readonly list: ListService, 
    private MerchandiseSalesService: MerchandiseSalesService,
    private MemberService: MemberService,
    private PaymentMethodService: PaymentMethodService,
    private SalesRepService: SalesRepService,
    private ProductService: ProductService,
   
    private fb: FormBuilder, 
    private confirmation: ConfirmationService,
    private router: Router) 
  {}

  ngOnInit() {

    const MerchandiseSalesStreamCreator = (query) => this.MerchandiseSalesService.getMerchandiseSalesWithDetail(query);

    this.list.hookToQuery(MerchandiseSalesStreamCreator).subscribe((response) => {
      this.MerchandiseSales = response;
    });
  }

  create() {
    this.selectedMerchandiseSales = {} as MerchandiseSalesDto;
    this.selectedMerchandiseSales.sales = {} as SalesDto;
    this.selectedMerchandiseSales.sales.member = {id:1} as MemberDto;
    this.selectedMerchandiseSales.sales.paymentMethod = {id:1} as PaymentMethodDto;
    this.selectedMerchandiseSales.sales.product = {id:1} as ProductDto;
    this.selectedMerchandiseSales.salesRep = {id:1} as SalesRepDto;

    this.buildForm(); // add this line
    this.isModalOpen = true;
  }

  edit(id: string) {
    // this.MerchandiseSalesService.get(id).subscribe((merchandisesales) => {
    //   this.selectedMerchandiseSales= merchandisesales;
    //   this.buildForm();
    //   this.isModalOpen = true;
    // });

    this.selectedMerchandiseSales=  this.MerchandiseSales.items.find(x=>x.id == id);
    this.buildForm();
    this.isModalOpen = true;

  }

   delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.MerchandiseSalesService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  // add buildForm method
  buildForm() {
     this.PaymentMethodService.getList({ maxResultCount: 100, skipCount: 0 }).subscribe((response) => {
      this.PaymentMethods = response;
     // alert(this.PaymentMethods.items);
    } );

    this.SalesRepService.getList({ maxResultCount: 100, skipCount: 0 }).subscribe((response) => {
        this.SalesReps = response;} );

    this.MemberService.getList({ maxResultCount: 100, skipCount: 0 }).subscribe((response) => {
        this.Members = response;});

    this.ProductService.getList({ maxResultCount: 100, skipCount: 0 }).subscribe((response) => {
          this.Products = response;});

    this.form = this.fb.group({
      name: "xxxx",
      id: [this.selectedMerchandiseSales?.id||null],
      salesRepId: [this.selectedMerchandiseSales?.salesRep?.id || 1, Validators.required],
      memberId: [this.selectedMerchandiseSales?.sales?.member?.id || 1, Validators.required],
      productId: [this.selectedMerchandiseSales?.sales?.product?.id || 1, Validators.required],
      paymentMethodId: [this.selectedMerchandiseSales?.sales?.paymentMethod?.id || 1, Validators.required],
      price: [this.selectedMerchandiseSales?.sales?.product?.price || null, Validators.required],
      quantity: [this.selectedMerchandiseSales?.sales?.quantity || null, Validators.required],
      discount: [this.selectedMerchandiseSales?.sales?.discount || null, Validators.required],
      amount: [this.selectedMerchandiseSales?.sales?.amount || null, Validators.required],
      });
  }
  onMemberChanged(memberId: number)
  {
   this.selectedMerchandiseSales.sales.member.id  = this.form.value.sales.member.id = memberId;
  
  }
    onProductChanged(productId: number)
    {
     this.selectedMerchandiseSales.sales.product.id  = productId;
    
    }

    onSalesRepChanged(salesrepid: number)
    {
     // alert(salesrepid);
     this.selectedMerchandiseSales.salesRep.id  =  salesrepid;
    }

    onPaymentMethodChanged(paymentmethodid: number)
    {
      alert(paymentmethodid);
     this.selectedMerchandiseSales.sales.paymentMethod.id  =  paymentmethodid;
    }
 
  // add save method
  save() {
    if (this.form.invalid) {
      return;
    }

    var tempSales ={} as CreateMerchandiseSalesDto ;
    
    tempSales.sales = {} as CreateSalesDto;
    tempSales.salesId =this.selectedMerchandiseSales?.sales?.id;
    tempSales.salesRepId = this.selectedMerchandiseSales.salesRep.id;
    tempSales.sales.memberId = this.selectedMerchandiseSales.sales.member.id;
    tempSales.sales.productId = this.selectedMerchandiseSales.sales.product.id;
    tempSales.sales.paymentMethodId = this.selectedMerchandiseSales.sales.paymentMethod.id;
    tempSales.sales.salesTypeId = 1;
    tempSales.sales.quantity = this.form.value.quantity;
    tempSales.sales.discount = this.form.value.discount;
    tempSales.sales.amount = this.form.value.amount;
   

    //alert(JSON.stringify(this.selectedMerchandiseSales));
    const request = this.selectedMerchandiseSales.id
    ? this.MerchandiseSalesService.update(this.selectedMerchandiseSales.id, tempSales)
    : this.MerchandiseSalesService.create(tempSales);

    request.subscribe(() => {
    this.isModalOpen = false;
    this.form.reset();
    this.list.get();
    });
   
  }


}
