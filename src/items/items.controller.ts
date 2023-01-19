import { Controller, Get } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { Item } from "./schemas/item.schema";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get("get")
  getItems() {
    return this.itemsService.getItems();
  }
}