(function () {
  emailjs.init({ publicKey: 'ZBasXTcpMWZl74At0' });
})();

async function contactForm(event) {
  event.preventDefault();
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('status');
  const btn    = document.querySelector('#contact-form button');

  if (!form) return;
  if (!form.checkValidity()) {
    status.textContent = "⚠️ Please fill out all required fields correctly.";
    form.reportValidity();
    return;
  }

  status.textContent = '';
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    await emailjs.sendForm('service_8ybfh8u', 'template_cuet6l8', '#contact-form');
    status.textContent = '✅ Message sent successfully!';
    form.reset();
    history.replaceState(null, '', location.pathname + location.search);
  } catch (err) {
    console.error('EmailJS error:', err);
    status.textContent = '❌ Failed to send message.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }
}

document.getElementById('contact-form').addEventListener('submit', contactForm);