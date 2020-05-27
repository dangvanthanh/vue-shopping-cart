import db from '../helpers/dbconnect';
const database = db.getDatabase;
const products = database.collection('products');

interface Product {
  _id: {
    $oid: string;
  };
  thumbnail: string;
  title: string;
  description: string;
  price: number;
}

export const getProducts: any = async (context: any) => {
  try {
    const data: any = await products.find();

    if (data) {
      context.response.body = data;
      context.response.status = 200;
    } else {
      context.response.body = 'not found';
      context.response.status = 204;
    }
  } catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};

export const getProduct: any = async (context: any) => {
  try {
    let id: string = context.params.id;
    const data: any = await products.findOne({ _id: { $oid: id } });

    if (data) {
      context.response.body = data;
      context.response.status = 200;
    } else {
      context.response.body = 'not found';
      context.response.status = 204;
    }
  } catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};

export const addProduct = async (context: any) => {
  try {
    let body: any = await context.request.body();
    const { thumbnail, name, description, price } = body.value;
    const id = await products.insertOne({
      thumbnail,
      name,
      description,
      price
    });

    context.response.body = id;
    context.response.status = 200;
  } catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};

export const updateProduct: any = async (context: any) => {
  try {
    const id: string = context.params.id;
    let body: any = await context.request.body();

    let data: {
      thumbnail?: String;
      name?: String;
      description?: String;
      price?: Number;
    } = {};

    if (body.value.thumbnail) {
      data['thumbnail'] = body.value.thumbnail;
    }
    if (body.value.name) {
      data['name'] = body.value.name;
    }
    if (body.value.description) {
      data['description'] = body.value.description;
    }
    if (body.value.price) {
      data['price'] = body.value.price;
    }

    const result = await products.updateOne(
      { _id: { $oid: id } },
      { $set: data }
    );

    context.response.body = result;
    context.response.status = 200;
  } catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};

export const deleteProduct: any = async (context: any) => {
  try {
    let id: string = context.params.id;
    const result = await products.deleteOne({ _id: { $oid: id } });
    context.response.body = { result };
    context.response.status = 200;
  } catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};
