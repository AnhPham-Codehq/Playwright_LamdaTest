import { Page, TestInfo } from "@playwright/test";
import { BasePage } from "./base.page";
import { Checkout } from "./checkout.page";
import { Home } from "./home.page";
import { ConfirmOrder } from "./confirmOrder.page";
import { ProductDetails } from "./productDetails.page";
import { Login } from "./login.page";
import { TopBar } from "./components/topbar.components";
import { Search } from "./search.page";
import { ShoppingCart } from "./components/shoppingCart.components";
import { LogOut } from "./logout.page";
import { Register } from "./register.page";
import { Cart } from "./cart.page";

export class App {
    private readonly _base: BasePage;
    private readonly _checkout: Checkout;
    private readonly _home: Home;
    private readonly _confirmOrder: ConfirmOrder;
    private readonly _productDetails: ProductDetails;
    private readonly _login: Login;
    private readonly _topbar: TopBar;
    private readonly _search: Search;
    private readonly _shoppingCart: ShoppingCart;
    private readonly _logout: LogOut;
    private readonly _register: Register;
    private readonly _cart: Cart;
    private readonly _page;

    constructor(page: Page, isMobile: boolean, testInfo: TestInfo) {
        this._base = new BasePage(page);
        this._checkout = new Checkout(page);
        this._confirmOrder = new ConfirmOrder(page);
        this._home = new Home(page);
        this._productDetails = new ProductDetails(page, isMobile);
        this._login = new Login(page, isMobile);
        this._topbar = new TopBar(page, isMobile);
        this._search = new Search(page, testInfo, isMobile);
        this._shoppingCart = new ShoppingCart(page);
        this._logout = new LogOut(page);
        this._register = new Register(page, isMobile);
        this._cart = new Cart(page);
        // this._accountAPI = new AccountAPI(page);
        this._page = page;
    }

    public get homePage(): Home {
        return this._home;
    }

    public get basePage(): BasePage {
        return this._base;
    }

    public get checkoutPage(): Checkout {
        return this._checkout;
    }

    public get confirmOrderPage(): ConfirmOrder {
        return this._confirmOrder;
    }

    public get productDetailsPage(): ProductDetails {
        return this._productDetails;
    }

    public get loginPage(): Login {
        return this._login;
    }
    public get topbarPage(): TopBar {
        return this._topbar;
    }
    public get searchPage(): Search {
        return this._search;
    }

    public get shoppingPage(): ShoppingCart {
        return this._shoppingCart;
    }

    public get logoutPage(): LogOut {
        return this._logout;
    }

    public get registerPage(): Register {
        return this._register;
    }

    // public get accountAPI(): AccountAPI {
    //     return this._accountAPI;
    // }

    public get cart(): Cart {
        return this._cart;
    }

    public get page(): Page {
        return this._page;
    }
}
