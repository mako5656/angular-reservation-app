const Product = require('./model/product');

class FakeDb {
    constructor() {
        this.products = [
            {
                cover_image: 'assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                heading_text1: 'サンプルテキスト1 サンプル サンプル サンプル サンプル サンプル サンプル サンプル サンプル',
                heading_text2: 'サンプルテキスト2 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                heading_text3: 'サンプルテキスト3 sample text sample text sample text sample text sample text',
            },
            {
                cover_image: 'assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                heading_text1: 'サンプルテキスト1 サンプル サンプル サンプル サンプル サンプル サンプル サンプル サンプル',
                heading_text2: 'サンプルテキスト2 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                heading_text3: 'サンプルテキスト3 sample text sample text sample text sample text sample text',
            },
            {
                cover_image: 'assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                heading_text1: 'サンプルテキスト1 サンプル サンプル サンプル サンプル サンプル サンプル サンプル サンプル',
                heading_text2: 'サンプルテキスト2 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                heading_text3: 'サンプルテキスト3 sample text sample text sample text sample text sample text',
            },
            {
                cover_image: 'assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                heading_text1: 'サンプルテキスト1 サンプル サンプル サンプル サンプル サンプル サンプル サンプル サンプル',
                heading_text2: 'サンプルテキスト2 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                heading_text3: 'サンプルテキスト3 sample text sample text sample text sample text sample text',
            }
        ]
    }

    async initDb() {
        await this.cleanDb();
        this.pushProductsToDb();
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }

    seeDb() {
        this.pushProductsToDb();
    }
}

module.exports = FakeDb;