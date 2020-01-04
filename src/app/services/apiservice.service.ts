import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

  private headerDict = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  private requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  medreg(name, mob, email, pass) {
    return this._http
      .post(
        "/api/user_login/register_api/",
        JSON.stringify({
          name: name,
          phone_no: mob,
          email: email,
          password: pass
        }),
        this.requestOptions
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  requestproduct(prod, tokkn) {
    return this._http
      .post(
        "/api/user_order/order_request/",
        JSON.stringify({
          pdt_id: prod,
          token: tokkn
        }),
        this.requestOptions
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  medlogin(logname, logpass) {
    return this._http
      .post(
        "/api/user_login/login_user/",
        JSON.stringify({ email: logname, password: logpass }),
        this.requestOptions
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getProducts(id) {
    return this._http
      .post(
        "/api/product_details/sub_product/",
        JSON.stringify({ id: id }),
        this.requestOptions
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getAllProducts() {
    return this._http
      .get("/api/product_details/product_detail/", this.requestOptions)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getProductDetails(pid) {
    return this._http
      .post(
        "/api/product_details/detail_product/",
        JSON.stringify({ id: pid }),
        this.requestOptions
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getnavlist() {
    return this._http
      .get("/api/product_details/main_cat/", this.requestOptions)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getsubcateg(scpid) {
    return this._http
      .post(
        "/api/product_details/sub_category/",
        JSON.stringify({ id: scpid }),
        this.requestOptions
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getnewcat() {
    return this._http
      .get("/api/product_details/all_category/", this.requestOptions)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  placeorder(
    token,
    pdt_id,
    mode,
    qty,
    pay_id,
    name,
    city,
    state,
    zip,
    phone,
    email,
    house_no,
    area,
    landmark
  ) {
    return this._http
      .post(
        "/api/user_order/order_place/",
        JSON.stringify({
          token: token,
          pdt_id: pdt_id,
          mode: mode,
          qty: qty,
          pay_id: pay_id,
          name: name,
          city: city,
          state: state,
          zip: zip,
          phone: phone,
          email: email,
          house_no: house_no,
          area: area,
          landmark: landmark
        }),
        this.requestOptions
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }
}

// https://medtech.creopedia.com/
