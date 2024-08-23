import { RotaSegura } from "./AuthUser";
import { API } from "../ui/api.fetch";
import { ConsumoJson } from "../Pages/Products/ConsumoJson";
export class Pedidos {
  constructor(UserId, ProductId, NewCount) {
    this.UserID = UserId;
    this.ProductId = ProductId;
    this.NewCount = NewCount;
  }
  async RenderOrders() {
    console.log(this.UserID, this.ProductId);
    const response = await API(
      `orders/create?UserID=${this.UserID}&produtoa=${this.ProductId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  async ReplaceOrders() {
    // const parms = new URLSearchParams({
    //   ProductId: this.ProductId,
    //   NewCount: this.NewCount,
    //   UserId: id,
    // });
    console.log(12346);

    const response = await API(
      `orders/replace?NewCount=${this.NewCount}&ProductId=${this.ProductId}&UserId=${this.UserID}`
    );
    const data = await response.json();
    console.log(data);
  }
}
