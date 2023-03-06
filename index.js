const AccountCategoryService = require('./accountCategoryService.js');
const AccountDataService = require('./accountDataService.js');
const ProductsDataService = require('./productsDataService.js');
const ProductsFacade = require('./productsFacade.js');

var accountCategoryService = new AccountCategoryService();
var accountDataService = new AccountDataService();
var productDataService = new ProductsDataService();

var name = 'Product 1';

var accounts = accountDataService.getAccounts();
var accountId = 0;

for (var i = 0; i < accounts.length; i++) {

    if (accounts[i].name === name) {
        accountId = accounts[i].id;
        break;
    }
}

if (accountId == 0)
    return [];

var accountCategory = accountCategoryService.getCategory(accountId);

var productList = productDataService.getProductsForCategory(accountCategory.id);


for (var i = 0; i < productList.length; i++)
{
    console.log(`Product name: ${productList[i].name}`);
    console.log(`Product price: ${productList[i].price}`);
}