// TypeScript validator for portfolio.js
// This file provides strict type checking for the portfolio data

import * as portfolioData from './portfolio';
import type { Portfolio } from './customLib/jasperschulte.com/types/portfolio';

// Validate that the portfolio data matches the Portfolio interface
const portfolio: Portfolio = portfolioData;

// Export the validated portfolio
export default portfolio;
