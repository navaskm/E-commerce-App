"use client";

const BackToTop = () => {
  return (
    <p 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      className="top-mooving">Back to top
    </p>
  )
}

export default BackToTop;