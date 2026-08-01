/**
 * GamePay — Storefront API Helper
 * Bridges static demo store with Faizan Ali's SQL Server Express Backend
 */

const GamePayAPI = {
  // 1. Fetch live games from SQL Server (with fallback to demo data)
  async getGames() {
    try {
      const response = await fetch('/api/games');
      if (!response.ok) throw new Error('API offline');
      const games = await response.json();
      return (games && games.length > 0) ? games : null;
    } catch (err) {
      // Fallback to static demo data silently when server is not running
      return null;
    }
  },

  // 2. Perform checkout (stores order in SQL Server database)
  async checkout(items, totalAmount, paymentMethodId = 1, userId = null) {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, totalAmount, paymentMethodId, userId })
      });
      return await response.json();
    } catch (err) {
      return { success: false, message: 'Backend server not running.' };
    }
  },

  // 3. User Login
  async login(email, password, role = 'customer') {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role })
      });
      return await response.json();
    } catch (err) {
      return { success: false, message: 'Could not connect to SQL database.' };
    }
  },

  // 4. User Registration
  async register(username, email, password, role = 'customer') {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role })
      });
      return await response.json();
    } catch (err) {
      return { success: false, message: 'Could not connect to SQL database.' };
    }
  }
};

window.GamePayAPI = GamePayAPI;
