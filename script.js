// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          const animation = element.getAttribute("data-animation") || "fadeInUp"
          const delay = element.getAttribute("data-delay") || ""

          if (animation) element.classList.add(`animate-${animation}`)
          if (delay) element.classList.add(delay)

          observer.unobserve(element)
        }
      })
    },
    { threshold: 0.1 },
  )

  animateElements.forEach((element) => {
    observer.observe(element)
  })

  // Cookie consent functionality
  const cookieConsent = document.querySelector(".fixed.bottom-0")
  const acceptButton = cookieConsent.querySelector(".btn-primary")
  const customizeButton = cookieConsent.querySelector(".btn-secondary")

  // Check if user has already accepted cookies
  if (localStorage.getItem("cookiesAccepted")) {
    cookieConsent.style.display = "none"
  }

  acceptButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true")
    cookieConsent.style.display = "none"
  })

  customizeButton.addEventListener("click", () => {
    // In a real implementation, this would open a modal with cookie settings
    alert("Cookie preferences would be shown here in a real implementation.")
  })
})

