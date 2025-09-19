// TypeScript validator for portfolio.js
// This file provides strict type checking for the portfolio data

import * as portfolioOld from './portfolio_old';
import * as portfolio from './portfolio';
import type { Portfolio } from './customLib/jasperschulte-com/types/portfolio';

// Validate that the portfolio data matches the Portfolio interface
export const nestedPortfolioOld: Portfolio = portfolioOld;
export const nestedPortfolio: Portfolio = portfolio;

