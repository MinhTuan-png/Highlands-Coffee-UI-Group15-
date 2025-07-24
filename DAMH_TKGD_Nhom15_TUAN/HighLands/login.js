// Login Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeLoginPage();
});

function initializeLoginPage() {
    setupPasswordToggle();
    setupFormValidation();
    setupSocialLogin();
    setupFormSubmission();
}

// Password visibility toggle
function setupPasswordToggle() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon
            this.textContent = type === 'password' ? '👁️' : '🙈';
        });
    }
}

// Form validation
function setupFormValidation() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Email/Phone validation
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateEmailOrPhone(this.value);
        });
        
        emailInput.addEventListener('input', function() {
            clearValidationError(this);
        });
    }
    
    // Password validation
    if (passwordInput) {
        passwordInput.addEventListener('blur', function() {
            validatePassword(this.value);
        });
        
        passwordInput.addEventListener('input', function() {
            clearValidationError(this);
        });
    }
}

function validateEmailOrPhone(value) {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;
    
    if (!value) {
        showValidationError(emailInput, 'Vui lòng nhập email hoặc số điện thoại');
        return false;
    }
    
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
        showValidationError(emailInput, 'Email hoặc số điện thoại không hợp lệ');
        return false;
    }
    
    clearValidationError(emailInput);
    return true;
}

function validatePassword(value) {
    const passwordInput = document.getElementById('password');
    
    if (!value) {
        showValidationError(passwordInput, 'Vui lòng nhập mật khẩu');
        return false;
    }
    
    if (value.length < 6) {
        showValidationError(passwordInput, 'Mật khẩu phải có ít nhất 6 ký tự');
        return false;
    }
    
    clearValidationError(passwordInput);
    return true;
}

function showValidationError(input, message) {
    clearValidationError(input);
    
    input.style.borderColor = '#dc3545';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    
    input.parentNode.appendChild(errorDiv);
}

function clearValidationError(input) {
    input.style.borderColor = '#e1e5e9';
    
    const existingError = input.parentNode.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
}

// Social login handlers
function setupSocialLogin() {
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');
    
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            handleSocialLogin('google');
        });
    }
    
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            handleSocialLogin('facebook');
        });
    }
}

function handleSocialLogin(provider) {
    console.log(`Đăng nhập với ${provider}`);
    
    // Show loading state
    const button = document.querySelector(`.btn-${provider}`);
    const originalText = button.textContent;
    button.textContent = 'Đang xử lý...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        
        // In real app, handle the OAuth flow here
        alert(`Tính năng đăng nhập với ${provider} sẽ được triển khai sau`);
    }, 2000);
}

// Form submission
function setupFormSubmission() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
}

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Validate form
    const isEmailValid = validateEmailOrPhone(email);
    const isPasswordValid = validatePassword(password);
    
    if (!isEmailValid || !isPasswordValid) {
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.btn-login');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Đang đăng nhập...';
    submitBtn.disabled = true;
    
    // Simulate login API call
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // In real app, make API call here
        console.log('Login data:', { email, password, remember });
        
        // Simulate successful login
        if (email === 'admin@highlands.com' && password === '123456') {
            alert('Đăng nhập thành công!');
            // Redirect to dashboard or home page
            window.location.href = 'index.html';
        } else {
            alert('Email/số điện thoại hoặc mật khẩu không chính xác');
        }
    }, 2000);
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = '#28a745';
    } else if (type === 'error') {
        notification.style.background = '#dc3545';
    } else {
        notification.style.background = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
