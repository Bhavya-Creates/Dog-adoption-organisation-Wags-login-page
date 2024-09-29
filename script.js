document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const imageSection = document.querySelector('.image-section');
    const logoContainer = document.querySelector('.logo-container');
    const loginContainer = document.querySelector('.login-container');
    const loginButton = document.getElementById('loginButton');
    const onlineIdInput = document.getElementById('online_id');
    const errorMessage = document.querySelector('.error-message');

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Show' : 'Hide';
    });

    window.addEventListener('load', function() {
        setTimeout(() => {
            imageSection.classList.add('show');
            
            setTimeout(() => {
                logoContainer.classList.add('animate');
                
                setTimeout(() => {
                    imageSection.classList.add('slide-right');
                    loginContainer.classList.add('slide-left');
                }, 2000);
            }, 1500);
        }, 100);
    });

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (onlineIdInput.value.trim() === '' || passwordInput.value.trim() === '') {
            errorMessage.textContent = 'Please fill all the information';
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';
        loginButton.classList.add('loading');

        setTimeout(() => {
            imageSection.classList.add('shrink');
            
            setTimeout(() => {
                imageSection.style.display = 'none';
                loginContainer.style.display = 'none';
                logoContainer.classList.add('center');
                
                setTimeout(() => {
                    logoContainer.style.display = 'none';
                }, 1500);
            }, 1000);
        }, 2000);
    });
});

