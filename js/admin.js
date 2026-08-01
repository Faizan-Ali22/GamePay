/**
 * GamePay — Admin Dashboard Script
 * Built for Faizan Ali's SQL Server & Express System
 */

const API_BASE = '/api';

// 1. Tab Switching
function switchAdminTab(tabId, btn) {
  document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));

  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add('active');
  }
  if (btn) {
    btn.classList.add('active');
  }

  // Refresh data when switching tabs
  if (tabId === 'tab-games') loadGames();
  if (tabId === 'tab-orders') loadOrders();
  if (tabId === 'tab-users') loadUsers();
}

// 2. Load Games
async function loadGames() {
  const tbody = document.getElementById('games-table-body');
  if (!tbody) return;

  try {
    const res = await fetch(`${API_BASE}/games`);
    const games = await res.json();

    if (!games || games.length === 0) {
      // Fallback to TRENDING_GAMES demo list if server returns empty/offline
      const demoList = typeof TRENDING_GAMES !== 'undefined' ? TRENDING_GAMES : [];
      tbody.innerHTML = demoList.map((g, idx) => `
        <tr>
          <td>#DEMO-${g.id || idx+1}</td>
          <td><strong>${g.title}</strong></td>
          <td>${g.genre || 'Action'}</td>
          <td>${Array.isArray(g.platforms) ? g.platforms.join(', ') : g.platforms || 'PC'}</td>
          <td>$${g.price || 49.99}</td>
          <td><span style="color: var(--text-muted); font-size: 0.8rem;">Demo Mode</span></td>
        </tr>
      `).join('');
      return;
    }

    tbody.innerHTML = games.map(g => `
      <tr>
        <td>#${g.game_id}</td>
        <td><strong>${g.title}</strong></td>
        <td>${g.genre}</td>
        <td>${g.platform}</td>
        <td>$${Number(g.price).toFixed(2)}</td>
        <td>
          <button class="action-btn" onclick="deleteGame(${g.game_id}, '${g.title}')">Delete</button>
        </td>
      </tr>
    `).join('');
  } catch (err) {
    console.error('Error loading games:', err);
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: #ff4081;">Unable to connect to GamePay SQL Server backend. Make sure 'node server.js' is running.</td></tr>`;
  }
}

// 3. Add Game (Multipart form data for image upload)
document.addEventListener('DOMContentLoaded', () => {
  loadGames();

  const addForm = document.getElementById('add-game-form');
  if (addForm) {
    addForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(addForm);

      try {
        const res = await fetch(`${API_BASE}/games`, {
          method: 'POST',
          headers: {
            'role': 'admin'
          },
          body: formData
        });

        const result = await res.json();
        if (result.success) {
          showToast('✅ Game added successfully to SQL Server database!');
          addForm.reset();
          loadGames();
          switchAdminTab('tab-games', document.querySelector('.admin-tab'));
        } else {
          showToast(`❌ Error: ${result.message || 'Could not add game'}`);
        }
      } catch (err) {
        console.error('Add game error:', err);
        showToast('❌ Backend Offline: Make sure to run "node server.js" first.');
      }
    });
  }
});

// 4. Delete Game
async function deleteGame(id, title) {
  if (!confirm(`Are you sure you want to delete "${title}" (#${id})?`)) return;

  try {
    const res = await fetch(`${API_BASE}/games/${id}`, {
      method: 'DELETE',
      headers: { 'role': 'admin' }
    });
    const result = await res.json();
    if (result.success) {
      showToast(`Deleted "${title}" successfully.`);
      loadGames();
    } else {
      showToast(`Error: ${result.message}`);
    }
  } catch (err) {
    showToast('❌ Backend Offline: Unable to delete game.');
  }
}

// 5. Load Customer Orders
async function loadOrders() {
  const tbody = document.getElementById('orders-table-body');
  if (!tbody) return;

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      headers: { 'role': 'admin' }
    });
    const orders = await res.json();

    if (!orders || orders.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--text-secondary);">No transactions recorded in the database yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = orders.map(o => `
      <tr>
        <td>#ORD-${o.order_id}</td>
        <td><strong>${o.customer_name || 'Guest'}</strong></td>
        <td>${o.game_title}</td>
        <td>${o.quantity}</td>
        <td>$${Number(o.price * o.quantity).toFixed(2)}</td>
        <td><span class="tag" style="background: var(--accent-blue);">${o.order_status || 'Completed'}</span></td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: #ff4081;">Failed to load orders from SQL Server.</td></tr>`;
  }
}

// 6. Load Registered Users
async function loadUsers() {
  const tbody = document.getElementById('users-table-body');
  if (!tbody) return;

  try {
    const res = await fetch(`${API_BASE}/users`, {
      headers: { 'role': 'admin' }
    });
    const users = await res.json();

    if (!users || users.length === 0) {
      tbody.innerHTML = `<tr>
        <td><strong>Faizan</strong></td>
        <td>faizan@gamepay.dev</td>
        <td><span class="tag" style="background: var(--accent-purple);">admin</span></td>
        <td>System Owner</td>
      </tr>`;
      return;
    }

    tbody.innerHTML = users.map(u => `
      <tr>
        <td><strong>${u.username}</strong></td>
        <td>${u.email}</td>
        <td><span class="tag" style="background: ${u.role_name === 'admin' ? 'var(--accent-purple)' : 'var(--accent-blue)'};">${u.role_name}</span></td>
        <td>
          ${u.role_name === 'admin' ? 'Protected' : `<button class="action-btn" onclick="deleteUser('${u.username}')">Remove</button>`}
        </td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color: #ff4081;">Failed to load users from SQL Server.</td></tr>`;
  }
}

// 7. Delete User
async function deleteUser(username) {
  if (!confirm(`Are you sure you want to remove user "${username}"?`)) return;

  try {
    const res = await fetch(`${API_BASE}/users/${username}`, {
      method: 'DELETE',
      headers: { 'role': 'admin' }
    });
    const result = await res.json();
    if (result.success) {
      showToast(`User "${username}" deleted.`);
      loadUsers();
    } else {
      showToast(`Error: ${result.message}`);
    }
  } catch (err) {
    showToast('❌ Backend Offline: Unable to delete user.');
  }
}

// 8. Toast Notification Helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
