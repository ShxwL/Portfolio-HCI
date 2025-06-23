// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Skill bar animations
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress")
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width
        }, 200)
      })
    }
  })
}, observerOptions)

const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  skillObserver.observe(skillsSection)
}

// Scroll animations for sections
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
)

// Observe all sections for fade-in animation
document.querySelectorAll("section").forEach((section) => {
  fadeObserver.observe(section)
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(26, 26, 26, 0.98)"
  } else {
    navbar.style.background = "rgba(26, 26, 26, 0.95)"
  }
})

// Contact form handling
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = contactForm.querySelector('input[type="text"]').value
    const email = contactForm.querySelector('input[type="email"]').value
    const message = contactForm.querySelector("textarea").value

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields")
      return
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector(".btn-primary")
    const originalText = submitBtn.textContent
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Message sent successfully! 🏁")
      contactForm.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Add click sound to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Add visual feedback
    btn.style.transform = "scale(0.95)"
    setTimeout(() => {
      btn.style.transform = ""
    }, 150)
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const speedLines = document.querySelector(".speed-lines")

  if (hero && speedLines) {
    const rate = scrolled * -0.5
    hero.style.transform = `translateY(${rate}px)`
    speedLines.style.transform = `translateY(${rate * 0.3}px)`
  }
})

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const titleLine1 = document.querySelector(".title-line-1")
  const titleLine2 = document.querySelector(".title-line-2")

  if (titleLine1 && titleLine2) {
    setTimeout(() => {
      typeWriter(titleLine1, "SHALMIHAD", 150)
    }, 500)

    setTimeout(() => {
      typeWriter(titleLine2, "SAHADI", 150)
    }, 2000)
  }
})

// Add racing countdown effect
function startRaceCountdown() {
  const countdown = document.createElement("div")
  countdown.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Orbitron', monospace;
        font-size: 8rem;
        font-weight: 900;
        color: var(--primary-red);
        z-index: 10000;
        text-shadow: 0 0 30px rgba(220, 20, 60, 0.8);
        pointer-events: none;
    `

  document.body.appendChild(countdown)

  let count = 3
  const countInterval = setInterval(() => {
    if (count > 0) {
      countdown.textContent = count
      count--
    } else {
      countdown.textContent = "GO!"
      setTimeout(() => {
        countdown.remove()
      }, 1000)
      clearInterval(countInterval)
    }
  }, 1000)
}

// Add Easter egg - press 'R' for race countdown
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r" && !e.ctrlKey && !e.altKey) {
    startRaceCountdown()
  }
})

// Add performance monitoring
function trackPerformance() {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      console.log(`🏁 Page loaded in ${loadTime}ms - Racing fast!`)
    })
  }
}

trackPerformance()

// Add smooth reveal animations for project cards
const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 200)
      }
    })
  },
  { threshold: 0.1 },
)

document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(50px)"
  card.style.transition = "all 0.6s ease"
  projectObserver.observe(card)
})

// Flag interaction effects
document.querySelectorAll(".checkered-flag").forEach((flag) => {
  flag.addEventListener("mouseenter", () => {
    flag.style.animationDuration = "1s"
  })

  flag.addEventListener("mouseleave", () => {
    flag.style.animationDuration = "2s"
  })
})

// Add wind effect to flags on scroll
window.addEventListener("scroll", () => {
  const scrollSpeed = Math.abs(window.pageYOffset - (window.lastScrollTop || 0))
  window.lastScrollTop = window.pageYOffset

  const flags = document.querySelectorAll(".checkered-flag")
  flags.forEach((flag) => {
    if (scrollSpeed > 5) {
      flag.style.animationDuration = "0.8s"
    } else {
      flag.style.animationDuration = "2s"
    }
  })
})

// Add celebration effect when reaching contact section
const contactSection = document.querySelector("#contact")
let celebrationTriggered = false

const celebrationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !celebrationTriggered) {
        celebrationTriggered = true
        createCelebrationFlags()
      }
    })
  },
  { threshold: 0.3 },
)

if (contactSection) {
  celebrationObserver.observe(contactSection)
}

function createCelebrationFlags() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const celebFlag = document.createElement("div")
      celebFlag.className = "celebration-flag"
      celebFlag.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}%;
                width: 30px;
                height: 20px;
                background: repeating-conic-gradient(
                    from 0deg,
                    #000 0deg 90deg,
                    #fff 90deg 180deg
                );
                background-size: 10px 10px;
                z-index: 1000;
                animation: celebrationFall 3s ease-in forwards;
                pointer-events: none;
            `

      document.body.appendChild(celebFlag)

      setTimeout(() => {
        celebFlag.remove()
      }, 3000)
    }, i * 200)
  }
}

// Add celebration fall animation
const style = document.createElement("style")
style.textContent = `
    @keyframes celebrationFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
