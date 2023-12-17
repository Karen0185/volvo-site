const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 320;


const currentFrame = (index) => `./volvo/${index.toString().padStart(4, '0')}.png`;

const images = [];
let volvo = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  // console.log(currentFrame(i));
  images.push(img);
}

gsap.to(volvo, {
  frame: frameCount - 0,
  snap: "frame",
  ease: "in",
  scrollTrigger: {
    scrub: 0,
    pin: "canvas",
    end: "700%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".title",
  {
    opacity: 0,
    top: '22%',
  },
  {
    opacity: 1,
    top: '20%',
    scrollTrigger: {
      scrub: .1,

      start: "0%",
      end: "10%",
    },
    onComplete: () => {
      gsap.to(".title", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".title",
  {
    top: '20%',
  },
  {
    top: '10%',
    scrollTrigger: {
      scrub: .1,

      start: "20%",
      end: "30%",
    },
    onComplete: () => {
      gsap.to(".title", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".title",
  {
    top: '10%',
  },
  {
    top: '12%',
    opacity: 0,
    scrollTrigger: {
      scrub: .1,

      start: "80%",
      end: "85%",
    },
    onComplete: () => {
      gsap.to(".title", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".scroll-down",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      scrub: .1,
      start: "0%",
      end: "3%",
    },
    onComplete: () => {
      gsap.to(".scroll-down", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".engine",
  {
    opacity: 0,
    top: '40%'
  },
  {
    opacity: 1,
    top: '30%',
    scrollTrigger: {
      scrub: .1,
      start: '20% 10%',
      end: '30% 20%'
    },
    onComplete: () => {
      gsap.to(".engine", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".drive",
  {
    opacity: 0,
    top: '40%'
  },
  {
    opacity: 1,
    top: '30%',
    scrollTrigger: {
      scrub: .1,
      start: '30% 10%',
      end: '40% 20%'
    },
    onComplete: () => {
      gsap.to(".drive", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".overclocking",
  {
    opacity: 0,
    top: '40%'
  },
  {
    opacity: 1,
    top: '30%',
    scrollTrigger: {
      scrub: .1,
      start: '40% 10%',
      end: '50% 20%'
    },
    onComplete: () => {
      gsap.to(".overclocking", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".power",
  {
    opacity: 0,
    top: '40%'
  },
  {
    opacity: 1,
    top: '30%',
    scrollTrigger: {
      scrub: .1,
      start: '50% 10%',
      end: '60% 20%'
    },
    onComplete: () => {
      gsap.to(".power", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".info",
  {
    right: '10%',
  },
  {
    left: '10%',
    scrollTrigger: {
      scrub: .1,
      start: '58% 10%',
      end: '60% 20%'
    },
    onComplete: () => {
      gsap.to(".info", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".interior",
  {
    opacity: 0,
    top: '40%'
  },
  {
    opacity: 1,
    top: '30%',
    scrollTrigger: {
      scrub: .1,
      start: '60% 10%',
      end: '70% 20%'
    },
    onComplete: () => {
      gsap.to(".interior", { opacity: 0 });
    },
  }
);

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[volvo.frame], 0, 0);
}

if (images.length > 300) {
  document.querySelector('.loading').style.display = 'none'
  document.querySelector('.bg').style.display = 'none'
}