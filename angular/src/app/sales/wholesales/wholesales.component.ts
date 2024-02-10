import { Component, OnInit } from '@angular/core';
import { WholeSalesService } from '@proxy/caikdduopos/application-services/whole-sales.service';
import { PaymentMethodService } from '@proxy/caikdduopos/application-services/payment-method.service';
import { SalesRepService } from '@proxy/caikdduopos/application-services/sales-rep.service';
import { ProductService } from '@proxy/caikdduopos/application-services/product.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerRangePopup} from '../../shared/date-picker/date-picker.component';
import { Router } from '@angular/router';
import { MemberDto, WholeSalesDto, PaymentMethodDto, ProductDto, SalesDto, SalesRepDto } from '@proxy/caikdduopos/dto';
import { MemberService } from '@proxy/caikdduopos/application-services';
import { CreateWholeSalesDto, CreateSalesDto } from '@proxy/caikdduopos/dto/create';

@Component({
  selector: 'app-wholesales',
  templateUrl: './wholesales.component.html',
  styleUrls: ['./wholesales.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]

})
export class WholesalesComponent implements OnInit{
  WholeSales = { items: [], totalCount: 0 } as PagedResultDto<WholeSalesDto>;
  Products = { items: [], totalCount: 0 } as PagedResultDto<ProductDto>;
  Members = { items: [], totalCount: 0 } as PagedResultDto<MemberDto>;
  PaymentMethods = { items: [], totalCount: 0 } as PagedResultDto<PaymentMethodDto>;
  
  SalesReps = { items: [], totalCount: 0 } as PagedResultDto<SalesRepDto>;
  form: FormGroup; // add this line

  selectedWholeSales = {} as WholeSalesDto;
  //queryDto = {} as ProductQueryDto;


  isModalOpen = false;
  constructor(public readonly list: ListService, 
    private WholeSalesService: WholeSalesService,
    private MemberService: MemberService,
    private PaymentMethodService: PaymentMethodService,
    private SalesRepService: SalesRepService,
    private ProductService: ProductService,
   
    private fb: FormBuilder, 
    private confirmation: ConfirmationService,
    private router: Router) 
  {}

  ngOnInit() {

    const WholeSalesStreamCreator = (query) => this.WholeSalesService.getWholeSalesWithDetail(query);

    this.list.hookToQuery(WholeSalesStreamCreator).subscribe((response) => {
      this.WholeSales = response;
    });
  }

  create() {
    this.selectedWholeSales = {} as WholeSalesDto;
    this.selectedWholeSales.sales = {} as SalesDto;
    this.selectedWholeSales.sales.member = {id:1} as MemberDto;
    this.selectedWholeSales.sales.paymentMethod = {id:1} as PaymentMethodDto;
    this.selectedWholeSales.sales.product = {id:1} as ProductDto;

    this.buildForm(); // add this line
    this.isModalOpen = true;
  }

  edit(id: string) {
    // this.WholeSalesService.get(id).subscribe((WholeSales) => {
    //   this.selectedWholeSales= WholeSales;
    //   this.buildForm();
    //   this.isModalOpen = true;
    // });

    this.selectedWholeSales=  this.WholeSales.items.find(x=>x.id == id);
    this.buildForm();
    this.isModalOpen = true;

  }

   delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.WholeSalesService.delete(id).subscribe(() => this.list.get());
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
     
      id: [this.selectedWholeSales?.id||null],
      deliveryMethod: [this.selectedWholeSales.deliveryMethod || null, Validators.required],
      deliveryAddress: [this.selectedWholeSales.deliveryAddress || null, Validators.required],
      memberId: [this.selectedWholeSales?.sales?.member?.id || 1, Validators.required],
      productId: [this.selectedWholeSales?.sales?.product?.id || 1, Validators.required],
      paymentMethodId: [this.selectedWholeSales?.sales?.paymentMethod?.id || 2, Validators.required],
      price: [this.selectedWholeSales?.sales?.product?.price || null, Validators.required],
      quantity: [this.selectedWholeSales?.sales?.quantity || null, Validators.required],
      discount: [this.selectedWholeSales?.sales?.discount || null, Validators.required],
      amount: [this.selectedWholeSales?.sales?.amount || null, Validators.required],
      });
  }
  onMemberChanged(memberId: number)
  {
   this.selectedWholeSales.sales.member.id  = this.form.value.sales.member.id = memberId;
  
  }
    onProductChanged(productId: number)
    {
     this.selectedWholeSales.sales.product.id  = productId;
    
    }

    onSalesRepChanged(salesrepid: number)
    {
     // alert(salesrepid);
     //this.selectedWholeSales.salesRep.id  =  salesrepid;
    }

    onPaymentMethodChanged(paymentmethodid: number)
    {
      alert(paymentmethodid);
     this.selectedWholeSales.sales.paymentMethod.id  =  paymentmethodid;
    }
 
  // add save method
  save() {
    if (this.form.invalid) {
      return;
    }

    var tempSales ={} as CreateWholeSalesDto ;
    
    tempSales.sales = {} as CreateSalesDto;
    tempSales.salesId =this.selectedWholeSales?.sales?.id;
    tempSales.sales.memberId = this.selectedWholeSales.sales.member.id;
    tempSales.sales.productId = this.selectedWholeSales.sales.product.id;
    tempSales.sales.paymentMethodId = this.selectedWholeSales.sales.paymentMethod.id;
    tempSales.sales.salesTypeId = 2;
    tempSales.sales.quantity = this.form.value.quantity;
    tempSales.sales.discount = this.form.value.discount;
    tempSales.sales.amount = this.form.value.amount;
    tempSales.deliveryAddress = this.form.value.deliveryAddress;
    tempSales.deliveryMethod = this.form.value.deliveryMethod;
   

    //alert(JSON.stringify(this.selectedWholeSales));
    const request = this.selectedWholeSales.id
    ? this.WholeSalesService.update(this.selectedWholeSales.id, tempSales)
    : this.WholeSalesService.create(tempSales);

    request.subscribe(() => {
    this.isModalOpen = false;
    this.form.reset();
    this.list.get();
    });
   
  }


}