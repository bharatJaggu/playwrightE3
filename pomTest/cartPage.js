exports.cart = class cart {

    constructor(page){
        this.page = page ; 
        this.booklink = 'a[href="/books"]', 
        this.bookName = '.product-title a[href="/health"]',
        this.addTocart = '#add-to-cart-button-22'
    }

    async addBookCart(){
        await this.page.locator(this.booklink).first().click() ; 
        await this.page.locator(this.bookName).click() ; 
        await this.page.locator(this.addTocart).click() ; 
    }


}