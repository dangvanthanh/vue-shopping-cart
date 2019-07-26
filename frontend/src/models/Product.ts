import IProduct from './IProduct';

export default class Product implements IProduct {
  constructor(
    public _id: any = '',
    public name: string = '',
    public image: string = '',
    public price: any = '',
    public description: string = ''
  ) {}
}
