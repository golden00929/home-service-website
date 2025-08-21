'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

interface ExchangeRates {
  [key: string]: number;
}

interface Currency {
  code: string;
  symbol: string;
  name: string;
  flag: string;
}

const currencies: Currency[] = [
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', flag: '🇻🇳' },
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'KRW', symbol: '₩', name: 'Korean Won', flag: '🇰🇷' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', flag: '🇨🇳' }
];

// Mock exchange rates - in production, fetch from API like exchangerate-api.com
const mockExchangeRates: ExchangeRates = {
  'VND-USD': 0.00004,
  'VND-KRW': 0.053,
  'VND-JPY': 0.0059,
  'VND-CNY': 0.00029,
  'USD-VND': 24800,
  'USD-KRW': 1320,
  'USD-JPY': 148,
  'USD-CNY': 7.2,
  'KRW-VND': 18.8,
  'KRW-USD': 0.00076,
  'KRW-JPY': 0.11,
  'KRW-CNY': 0.0055,
  'JPY-VND': 168,
  'JPY-USD': 0.0068,
  'JPY-KRW': 8.9,
  'JPY-CNY': 0.049,
  'CNY-VND': 3450,
  'CNY-USD': 0.139,
  'CNY-KRW': 183,
  'CNY-JPY': 20.6
};

// Default service prices in VND
const servicePricesVND = {
  air_conditioner_cleaning: 200000,
  plumbing_repair: 150000,
  electrical_repair: 180000,
  leak_detection: 250000,
  tile_painting: 100000
};

export default function CurrencyConverter() {
  const locale = useLocale();
  const [fromCurrency, setFromCurrency] = useState('VND');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState<number>(200000);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>(mockExchangeRates);
  const [selectedService, setSelectedService] = useState('air_conditioner_cleaning');

  // Set default currencies based on locale
  useEffect(() => {
    switch (locale) {
      case 'ko':
        setToCurrency('KRW');
        break;
      case 'ja':
        setToCurrency('JPY');
        break;
      case 'zh':
        setToCurrency('CNY');
        break;
      case 'en':
        setToCurrency('USD');
        break;
      default:
        setToCurrency('USD');
    }
  }, [locale]);

  // Convert currency
  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    const rateKey = `${fromCurrency}-${toCurrency}`;
    const rate = exchangeRates[rateKey];
    
    if (rate) {
      setConvertedAmount(amount * rate);
    } else {
      setConvertedAmount(0);
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  // Update amount when service changes
  useEffect(() => {
    const servicePrice = servicePricesVND[selectedService as keyof typeof servicePricesVND];
    if (fromCurrency === 'VND') {
      setAmount(servicePrice);
    } else {
      // Convert from VND to current fromCurrency
      const rateKey = `VND-${fromCurrency}`;
      const rate = exchangeRates[rateKey];
      if (rate) {
        setAmount(servicePrice * rate);
      }
    }
  }, [selectedService, fromCurrency, exchangeRates]);

  const formatCurrency = (amount: number, currencyCode: string) => {
    const currency = currencies.find(c => c.code === currencyCode);
    if (!currency) return amount.toString();

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: currencyCode === 'JPY' || currencyCode === 'KRW' || currencyCode === 'VND' ? 0 : 2,
      maximumFractionDigits: currencyCode === 'JPY' || currencyCode === 'KRW' || currencyCode === 'VND' ? 0 : 2,
    });

    return `${currency.flag} ${currency.symbol}${formatter.format(amount)}`;
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">💱 Service Price Calculator</h3>
      
      {/* Service Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Service
        </label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="air_conditioner_cleaning">🌬️ Air Conditioner Cleaning</option>
          <option value="plumbing_repair">🔧 Plumbing Repair</option>
          <option value="electrical_repair">⚡ Electrical Repair</option>
          <option value="leak_detection">💧 Leak Detection</option>
          <option value="tile_painting">🎨 Tile & Painting</option>
        </select>
      </div>

      {/* Currency Converter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* From Currency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <div className="relative">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* To Currency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <div className="relative">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-lg font-semibold">
            {formatCurrency(convertedAmount, toCurrency)}
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="text-center mb-6">
        <button
          onClick={swapCurrencies}
          className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-full transition-colors"
        >
          🔄 Swap
        </button>
      </div>

      {/* Exchange Rate Info */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="text-sm text-gray-600 text-center">
          <p className="mb-2">Exchange Rate:</p>
          <p className="font-semibold">
            1 {fromCurrency} = {exchangeRates[`${fromCurrency}-${toCurrency}`]?.toFixed(6) || 'N/A'} {toCurrency}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            * Rates are approximate and for reference only
          </p>
        </div>
      </div>

      {/* Service Pricing Table */}
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-800 mb-3">All Service Prices</h4>
        <div className="space-y-2 text-sm">
          {Object.entries(servicePricesVND).map(([service, priceVND]) => {
            const convertedPrice = toCurrency === 'VND' ? priceVND : priceVND * (exchangeRates[`VND-${toCurrency}`] || 1);
            return (
              <div key={service} className="flex justify-between">
                <span className="text-gray-600">
                  {service.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <span className="font-medium">
                  {formatCurrency(convertedPrice, toCurrency)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 pt-4 border-t">
        <a
          href="/contact"
          className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Get Accurate Quote
        </a>
      </div>
    </div>
  );
}