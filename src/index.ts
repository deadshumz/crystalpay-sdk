import CrystalUtils from './utils/CrystalUtils';
import Me from './api/Me';
import Balance from './api/Balance';
import Method from './api/Method';
import Invoice from './api/Invoice';
import Payoff from './api/Payoff';
import Ticker from './api/Ticker';
import History from './api/History';

/**
 * @export
 * @class CrystalPay
 * @param {string} auth_login - CrystalPay login
 * @param {string} auth_secret - CrystalPay secret
 */
export default class CrystalPay {
    public Me : Me;
    public Balance: Balance;
    public Method: Method;
    public Invoice: Invoice;
    public Payoff: Payoff;
    public Ticker: Ticker;
    public History: History;

    constructor(auth_login: string, auth_secret: string) {
        this.Me = new Me(auth_login, auth_secret, new CrystalUtils);
        this.Balance = new Balance(auth_login, auth_secret, new CrystalUtils);
        this.Method = new Method(auth_login, auth_secret, new CrystalUtils);
        this.Invoice = new Invoice(auth_login, auth_secret, new CrystalUtils);
        this.Payoff = new Payoff(auth_login, auth_secret, new CrystalUtils);
        this.Ticker = new Ticker(auth_login, auth_secret, new CrystalUtils);
        this.History = new History(auth_login, auth_secret, new CrystalUtils);
    }
}

export {Me, Balance, Method, Invoice, Payoff, Ticker, History, CrystalUtils}