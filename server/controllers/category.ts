const categories = new Map<string, any>();

categories.set('1', {
  id: '1',
  slug: 'all',
  name: 'All',
});

categories.set('2', {
  id: '2',
  slug: 'road-bikes',
  name: 'Road Bikes',
});

categories.set('3', {
  id: '3',
  slug: 'mountain-bikes',
  name: 'Mountain Bikes',
});

categories.set('4', {
  id: '4',
  slug: 'electric-bikes',
  name: 'Electric Bikes',
});

categories.set('5', {
  id: '5',
  slug: 'touring-bikes',
  name: 'Touring Bikes',
});

class CategoryController {
  async index({ response }: { response: any }) {
    response.body = Array.from(categories.values());
  }
}

export default new CategoryController();
