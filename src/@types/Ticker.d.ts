export type TickerListRequest = {
    auth_login: string,
    auth_secret: string,
}

export type TickerListResponse = {
    error: boolean,
    errors: string[],
    tickers: string[],
}

export type TickerGetRequest = {
    auth_login: string,
    auth_secret: string,
    tickers: string[],
}

type Currency = {
    price: number;
};

type Currencies = {
    [key: string]: Currency;
};

export type TickerGetResponse = {
    error: boolean,
    errors: string[],
    base_currency: string,
    currencies: Currencies,
  }
