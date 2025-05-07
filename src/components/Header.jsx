import Autor from "/img/autor.jpeg"  ;
import Resume from "/documents/resume-valverde-cardenas-dana.pdf"
import { useRef, useEffect } from 'react';

export function Header() {
   const canvasRef = useRef(null);
    const animationRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      const bars = 150;
      const radius = 100;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      let tick = 0;

  
  
      // Generamos un array de variaciones únicas por barra
      const randomOffsets = Array.from({ length: bars }, () => Math.random() * 100);
      const getResponsiveAmplitude = (i) => {
        const width = window.innerWidth;
        const noise = Math.sin((tick + randomOffsets[i]) / 20) * 10;

        if (width < 770) return 130 + noise;       // celulares
        if (width < 1030) return 80 + noise;      // tablets


        return 130 + noise;                       // desktop
      };
  
      const draw = () => {
        animationRef.current = requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(centerX, centerY);
  
        for (let i = 0; i < bars; i++) {
          const angle = (i / bars) * 2 * Math.PI;
  
          // Creamos amplitudes diferentes para cada barra usando sin + offset
          const amplitude = getResponsiveAmplitude(i);
  
          ctx.save();
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.moveTo(radius, 0);
          ctx.lineTo(radius + amplitude, 0);
          ctx.strokeStyle = '#2F6BA9';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }
  
        ctx.restore();
        tick++;
      };
  
      draw();
  
      return () => cancelAnimationFrame(animationRef.current);
    }, []);
  
    return (
        <div className="grid grid-cols-[auto] gap-4 md:gap-5 px-4 lg:px-24 content-center md:grid-cols-[60%_auto] lg:grid-cols-[60%_auto]  ">
      <div className="font-medium font-[Montserrat] text-center justify-center content-center text-black dark:text-white md:text-left mt-8 md:mt-0  ">
      <h2 className="text-2xl md:text-4xl mt-1">Hi! I’m</h2>
      <h2 className="text-2xl font-semibold md:text-4xl text-[#2F6BA9] dark:text-[#2D9FE5] mt-1 md:mt-4">Dana Valverde Cárdenas</h2>
      <h2 className="text-xl md:text-4xl mt-1 md:mt-4">Full stack Developer</h2>
      <a href={Resume} target="_blank" >
      <button  type="button" className="bg-[#2F6BA9] dark:bg-[#2D9FE5] md:text-xl px-4 py-2 rounded-lg text-center md:text-justify text-white mt-5 mb-1 ">
        Download my resume
      </button>
      </a>
      <div className="flex justify-center md:justify-start mt-4">
        <a href="www.linkedin.com/in/dana-valverde-cardenas" target="_blank" rel="noreferrer" className="text-decoration-none me-3" aria-label="linkedin">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"></path>
        </svg>
        </a>
        <a href="https://github.com/tintin1401" target="_blank" rel="noreferrer" className="text-decoration-none me-3" aria-label="github">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
        </svg>
        </a>
        <a href="mailto:dana.cardenascr@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none me-3" aria-label="maildotru">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61S8.39 13.99 8.39 12S10.01 8.39 12 8.39s3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024l-1.617-1.879l-.027.017A9.5 9.5 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54S6.74 2.46 12 2.46s9.54 4.28 9.54 9.54a9.6 9.6 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568c-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93A6.076 6.076 0 0 0 5.93 12A6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792a3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821c.719-.547 1.256-1.336 1.553-2.285c.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457c0-6.617-5.383-12-12-12"></path>
        </svg>
        </a>
       
      </div>

    </div>
    <div className="relative lg:w-[30vw] md:h-[70vh] rounded-lg flex justify-center md:my-[2rem]">
  <canvas
    ref={canvasRef}
    width={500}
    height={500}
    className="w-full h-full object-cover rounded-lg z-10"
  />
  <img
    src="/img/autor.jpeg"
    alt="Center"
    className="absolute top-1/2 left-1/2 w-[85%]  transform -translate-x-1/2 -translate-y-1/2 rounded-full z-20 dark:filter dark:grayscale"
  />
</div>
      </div>
    );
}