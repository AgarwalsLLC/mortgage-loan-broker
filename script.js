const mortgageForm = document.getElementById("mortgageForm");
const calcResult = document.getElementById("calcResult");

function formatUsd(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function calculatePayment(principal, annualRate, years) {
  if (principal <= 0 || annualRate < 0 || years <= 0) return 0;
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

if (mortgageForm && calcResult) {
  mortgageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const homePrice = Number(document.getElementById("homePrice").value || 0);
    const downPayment = Number(document.getElementById("downPayment").value || 0);
    const interestRate = Number(document.getElementById("interestRate").value || 0);
    const loanTerm = Number(document.getElementById("loanTerm").value || 30);
    const loanAmount = Math.max(homePrice - downPayment, 0);
    const payment = calculatePayment(loanAmount, interestRate, loanTerm);
    calcResult.textContent = `${formatUsd(payment)} / month (est. principal + interest)`;
  });

  mortgageForm.requestSubmit();
}

const testimonials = [
  {
    quote:
      "Our file had self-employed income and a short closing timeline. Summit Harbor kept it organized, and we closed six days early.",
    meta: "A. Patel, Purchase Client",
  },
  {
    quote:
      "We evaluated multiple lenders in one week and refinanced into a structure that cut our payment while preserving liquidity.",
    meta: "M. Johnson, Refinance Client",
  },
  {
    quote:
      "The communication cadence was tight and practical. Every condition had an owner and we never lost momentum.",
    meta: "R. Nguyen, Investment Borrower",
  },
];

const quoteText = document.getElementById("quoteText");
const quoteMeta = document.getElementById("quoteMeta");
const prevQuote = document.getElementById("prevQuote");
const nextQuote = document.getElementById("nextQuote");
let quoteIndex = 0;

function renderQuote(index) {
  if (!quoteText || !quoteMeta) return;
  const item = testimonials[index];
  quoteText.textContent = `“${item.quote}”`;
  quoteMeta.textContent = item.meta;
}

if (prevQuote && nextQuote) {
  prevQuote.addEventListener("click", () => {
    quoteIndex = (quoteIndex - 1 + testimonials.length) % testimonials.length;
    renderQuote(quoteIndex);
  });

  nextQuote.addEventListener("click", () => {
    quoteIndex = (quoteIndex + 1) % testimonials.length;
    renderQuote(quoteIndex);
  });

  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % testimonials.length;
    renderQuote(quoteIndex);
  }, 9000);
}

renderQuote(quoteIndex);

document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-question");
  if (!button) return;
  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((entry) => {
      entry.classList.remove("active");
      const question = entry.querySelector(".faq-question");
      if (question) question.setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = "Request Sent";
      button.disabled = true;
    }
  });
}
