// Header Component
function createHeader() {
  return `
        <header class="header">
            <div class="top-bar">
                <div class="container">
                    <div>
                        <a href="index.html">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Highlands_Coffee_5G.svg/1200px-Highlands_Coffee_5G.svg.png" style="height: 60px;"/>
                         
                        </a>
                    </div>
                    <div class="search-section">
                        <form class="search-bar" onsubmit="handleSearch(event)">
                            <input type="search" id="search-input" placeholder="Tìm kiếm sản phẩm...">
                            <button type="submit" class="search-btn">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            </button>
                        </form>
                    </div>
                    <div class="user-actions">
                        <div class="language-selector">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='15'%3E%3Crect width='20' height='15' fill='%23012169'/%3E%3Cpath d='M0,0 L20,15 M20,0 L0,15' stroke='%23fff' stroke-width='3'/%3E%3Cpath d='M0,0 L20,15 M20,0 L0,15' stroke='%23C8102E' stroke-width='2'/%3E%3Cpath d='M10,0 L10,15 M0,7.5 L20,7.5' stroke='%23fff' stroke-width='5'/%3E%3Cpath d='M10,0 L10,15 M0,7.5 L20,7.5' stroke='%23C8102E' stroke-width='3'/%3E%3C/svg%3E" alt="EN" width="20">
                        </div>
                        <div class="contact-info" style="display:flex; flex:0 0 30%">
                            <img src="./public/phone.png" alt="Phone" style="width: 24px;"/>
                            <div class="contact-text">
                                <span class="contact-label">Giao tận nơi</span>
                                <span class="phone-number">1900 1755</span>
                            </div>
                        </div>
                        <div class="account-section">
                           <img src="./public/user.png" alt="User" style="width: 24px;"/>
                            <div class="account-text" style="width:65px">
                                <span class="account-label">Tài khoản</span>
                                <a href="login.html"><span class="account-status">Đăng nhập</span></a>
                            </div>
                        </div>
                        <div class="cart-section" onclick="goToCart()" style="border: 2px solid #B22A2E;" >
                            <img src="./public/cart.png" alt="User" style="width: 24px;"/>
                            <div class="cart-text" style="width:80px;display:flex;flex-direction:row;gap:10px;align-items:center;">
                                <span class="cart-label">Giỏ hàng</span>
                                <span class="cart-count-quantity" style="background: #DFD5C8; color: #B22A2E; width:20px; text-align: center; padding:2px 0;border-radius: 3px">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="main-nav">
                <div class="container" style="height: 100%;">
                    <div class="nav-items">
                        <div class="nav-item dropdown-menu" style="background: #fff ;color:#B22A2E; margin-top:10px;padding:0 10px; border-radius: 10px 10px 0 0px;">
                            <a href="#" class="nav-link" id="category-dropdown-trigger" style="width: 230px;color: #B22A2E; font-weight: bold;">
                                <img src="./public/icondm.png" alt="Category" style="width: 24px;"/> Danh mục sản phẩm 
                            </a>
                            <div class="dropdown-content" id="category-dropdown">
                                <div class="dropdown-grid">
                                    <a href="category.html?category=coffee" class="dropdown-item">
                                        <span class="item-icon">☕</span>
                                        <span>Cà Phê</span>
                                    </a>
                                    <a href="category.html?category=tea" class="dropdown-item">
                                        <span class="item-icon">🍵</span>
                                        <span>Trà</span>
                                    </a>
                                    <a href="category.html?category=freeze" class="dropdown-item">
                                        <span class="item-icon">🧊</span>
                                        <span>Freeze</span>
                                    </a>
                                    <a href="category.html?category=other" class="dropdown-item">
                                        <span class="item-icon">🥤</span>
                                        <span>Phindi</span>
                                    </a>
                                    <a href="category.html?category=food" class="dropdown-item">
                                        <span class="item-icon">🥖</span>
                                        <span>Bánh Mì Que</span>
                                    </a>
                                    <a href="category.html?category=food" class="dropdown-item">
                                        <span class="item-icon">🧁</span>
                                        <span>Bánh Ngọt</span>
                                    </a>
                                    <a href="category.html?category=other" class="dropdown-item">
                                        <span class="item-icon">🥤</span>
                                        <span>Thức Uống Khác</span>
                                    </a>
                                    <a href="category.html?category=other" class="dropdown-item">
                                        <span class="item-icon">🌡️</span>
                                        <span>Bình Giữ Nhiệt</span>
                                    </a>
                                    <a href="category.html?category=other" class="dropdown-item">
                                        <span class="item-icon">☕</span>
                                        <span>Ly Giữ Nhiệt</span>
                                    </a>
                                    <a href="category.html?category=coffee" class="dropdown-item">
                                        <span class="item-icon">📦</span>
                                        <span>Cà Phê Đóng Gói</span>
                                    </a>
                                    <a href="./gift-card.html" class="dropdown-item">
                                        <span class="item-icon">🎁</span>
                                        <span>Thẻ Quà Tặng</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        
                        <a href="chinh-sach-dat-hang.html" class="nav-item">
                             <img src="./public/cs.png" alt="chính sách" style="width: 24px;"/> Chính sách đổi trả
                        </a>
                        <a href="contact.html" class="nav-item">
                             <img src="./public/lh.png" alt="Category" style="width: 24px;"/> Liên hệ
                        </a>
                        <a href="./news.html" class="nav-item">
                             <img src="./public/tt.png" alt="Category" style="width: 24px;"/> Tin tức
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

// Footer Component
function createFooter() {
  return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section company-info">
                        <h3>Thông tin công ty</h3>
                         <div>
                        <a href="index.html" style="margin-bottom:20px">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Highlands_Coffee_5G.svg/1200px-Highlands_Coffee_5G.svg.png" style="height: 60px;"/>
                         
                        </a>
                        </div>
                        <p>Highlands Coffee® Quyền thuộc CÔNG TY CỔ PHẦN DỊCH VỤ CÀ PHÊ CAO NGUYÊN được bảo hộ nhãn hiệu phân hạng 43 cho tất cả các sản phẩm mang thương hiệu Highlands Coffee®. Tại các văn phòng:</p>
                        <div class="address">
                            <p><i class="fa fa-map-marker-alt" style="color: #030303ff;"></i> Địa chỉ: 123 Nguyễn Cư Trinh, phường An Lạc Đông, Quận 2, TP Hồ Chí Minh. MSDN: 0309965814 do Sở Kế hoạch - Đầu tư TP Hồ Chí Minh cấp ngày 04/01/2016. Sửa đổi lần thứ 30 ngày 30/08/2022.</p>
                            <p><i class="fa fa-phone" style="color: #030303ff;"></i> Số điện thoại: 1900 1755</p>
                            <p><i class="fa fa-envelope" style="color: #030303ff;"></i> Email: customerservice@highlandscoffee.com.vn</p>
                        </div>
                        <div class="social-links">
                            <a href="#" class="social-link facebook"><img src="./public/fb.png"  style="width: 100%;" alt="Facebook"/></a>
                            <a href="#" class="social-link twitter"><img src="./public/zl.png" alt="Zalo" style="width: 100%;"/></a>
                            <a href="#" class="social-link instagram"><img src="./public/ig.png" style="width: 100%;" alt="Instagram"/></a>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h4>Chính sách</h4>
                        <ul>
                            <li><a href="#">Chính sách đổi hàng</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                            <li><a href="#">Chính sách thanh toán VNPAY online</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4>Hỗ trợ</h4>
                        <ul>
                            <li><a href="#">Tìm kiếm</a></li>
                            <li><a href="#">Bảng giá</a></li>
                            <li><a href="#">Bảng ký</a></li>
                            <li><a href="#">Góp hàng</a></li>
                            <li><a href="contact.html">Liên hệ</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4>Đăng ký nhận tin</h4>
                        <div class="newsletter-form">
                            <input type="email" placeholder="Nhập email của bạn">
                            <button type="submit" style="background: #DFD5C8; color:#AF272E" >Đăng ký</button>
                        </div>
                        <div class="certification">
                            <img src="./public/bct.png" alt="Bộ Công Thương" class="cert-logo">
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2023 Highlands Coffee. All rights reserved | Cung cấp bởi Sapo</p>
                </div>
            </div>
        </footer>
    `;
}

// Dropdown menu functionality
function initDropdownMenu() {
  const dropdownTrigger = document.getElementById("category-dropdown-trigger");
  const dropdown = document.getElementById("category-dropdown");

  if (dropdownTrigger && dropdown) {
    // Check if we're on index page - if so, don't add toggle functionality
    const isIndexPage =
      window.location.pathname.includes("index.html") ||
      window.location.pathname === "/" ||
      window.location.pathname.endsWith("/");

    if (!isIndexPage) {
      dropdownTrigger.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.classList.toggle("show");
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", function (e) {
        if (
          !dropdownTrigger.contains(e.target) &&
          !dropdown.contains(e.target)
        ) {
          dropdown.classList.remove("show");
        }
      });
    }
  }
}

// Cart functionality
function goToCart() {
  // Save cart data and go to checkout
  if (window.goToCheckout) {
    window.goToCheckout();
  } else {
    window.location.href = "cart.html";
  }
}

function updateCartDisplay() {
  const cartCountEl = document.querySelector(".cart-count-quantity");

  if (cartCountEl) {
    let totalItems = 0;

    // Try to get from cart object first
    if (window.cart && window.cart.getTotalItems) {
      totalItems = window.cart.getTotalItems();
    } else {
      // Fallback: calculate from localStorage
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      totalItems = cartData.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
    }

    cartCountEl.textContent = totalItems;

    // Force visibility and styling
    cartCountEl.style.display = "block";
    cartCountEl.style.visibility = "visible";
    cartCountEl.style.opacity = "1";

    // Add some styling to make it more visible
    if (totalItems > 0) {
      cartCountEl.style.backgroundColor = "#c41e3a";
      cartCountEl.style.color = "white";
      cartCountEl.style.borderRadius = "50%";
      cartCountEl.style.padding = "2px 6px";
      cartCountEl.style.fontSize = "12px";
      cartCountEl.style.fontWeight = "bold";
      cartCountEl.style.minWidth = "18px";
      cartCountEl.style.textAlign = "center";
    } else {
      cartCountEl.style.backgroundColor = "transparent";
      cartCountEl.style.color = "#666";
    }
  }
}

// Load components
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header-container").innerHTML = createHeader();
  document.getElementById("footer-container").innerHTML = createFooter();

  // Initialize dropdown after components are loaded
  setTimeout(initDropdownMenu, 100);

  // Update cart display after components are loaded
  setTimeout(() => {
    updateCartDisplay();
  }, 500);

  // Also try to update when page is fully loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      updateCartDisplay();
    }, 100);
  });
});

// Search functionality
function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    // Redirect to category page with search parameter
    window.location.href = `category.html?category=all&search=${encodeURIComponent(
      searchTerm
    )}`;
  }
}

// Force update cart display function
function forceUpdateCartDisplay() {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateCartDisplay);
  } else {
    updateCartDisplay();
  }
}

// Export functions for global access
window.updateCartDisplay = updateCartDisplay;
window.forceUpdateCartDisplay = forceUpdateCartDisplay;
window.goToCart = goToCart;
