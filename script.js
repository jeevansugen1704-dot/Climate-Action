$(document).ready(function() {
    
    // 1. ACTIVE NAVIGATION HIGHLIGHTER
    // Automatically highlights the nav link of the current page
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if(link.href === currentLocation){
            link.classList.add('active');
        }
    });

    // 2. DONATE PAGE: AMOUNT SELECTION LOGIC
    // Updates the custom input box when RM buttons are clicked
    $('.amount-option').on('click', function() {
        const selectedAmount = $(this).text().replace('RM ', '');
        $('#displayAmount').val(selectedAmount);
        
        // Visual feedback: briefly glow the input box
        $('#displayAmount').css('box-shadow', '0 0 15px #1abc9c');
        setTimeout(() => {
            $('#displayAmount').css('box-shadow', 'none');
        }, 500);
    });

    // 3. DONATE FORM VALIDATION & SUBMISSION
    $('#donationForm').on('submit', function(e) {
        e.preventDefault();
        const donorName = $('#userName').val();
        const amount = $('#displayAmount').val();

        if (amount <= 0) {
            alert("Please enter a valid donation amount greater than RM 0.");
        } else {
            alert("Thank you, " + donorName + "! Your contribution of RM " + amount + " helps fund our climate projects.");
            // Reset form or redirect
            this.reset();
            window.location.href = "index.html"; 
        }
    });

    // 4. VOLUNTEER FORM SUBMISSION
    $('#volunteerForm').on('submit', function(e) {
        e.preventDefault();
        // Simple animation effect on button
        $('.vol-submit-btn').text('Processing...').css('opacity', '0.7');
        
        setTimeout(() => {
            alert("Application successful! Thank you for joining the movement. We will email you the orientation details shortly.");
            window.location.href = "index.html";
        }, 1500);
    });

    // 5. SMOOTH SCROLL EFFECT
    // Makes internal page jumps (if you add any) feel smoother
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // 6. BUTTON HOVER ANIMATION (JQUERY)
    $('.main-action-btn, .donate-btn a').hover(
        function() { $(this).css('transform', 'scale(1.1)'); },
        function() { $(this).css('transform', 'scale(1.0)'); }
    );
});