import ImageSlider from '@/components/ui/ImageSlider';
import FilterButtons from '@/components/ui/filterbtn';

export default function Component() {
    const images = [
      "/images/blog-img1.jpeg",
      "/images/blog-img2.jpg",
      "/images/blog-img3.jpg",
      "/images/blog-img4.jpg",
      "/images/blog-img5.jpg"
  ];
  return (
    <>
    <section className="banner mb-24">
      <ImageSlider images={images} text="Dive deeper into BDGSA and Montreal" />
    </section>
    <section className="filters">
      <h1 className="text-6xl text-customGray font-semibold text-center my-4 opacity-80">Blogs</h1>
      <p className="text-center mx-4 text-customGray my-4 opacity-90">
        Welcome to our blog! Here&apos;s what you&apos;ll find:<br />
        <span className="font-semibold"> Academic Success:</span> Tips and resources to excel in your studies.<br />
        <span className="font-semibold">Career & Jobs:</span> Guides on job hunting, career planning, and networking.<br />
        <span className="font-semibold">Life in Montreal:</span> Explore the city&apos;s culture, hidden gems, and must-sees.<br />
        <span className="font-semibold">Newcomer Essentials:</span> Settling in tips, housing guides, and more.<br />
        <span className="font-semibold">Extra-Curricular Activities (ECA):</span> Clubs, events, and ways to get involved.<br />
        <span className="font-semibold">Student Finances:</span> Budgeting tips and scholarship opportunities.<br />
        <span className="font-semibold">Health & Wellness:</span> Advice on mental health, fitness, and self-care.<br />
        Your journey starts here—let&apos;s make it unforgettable!<br />
      </p>
      <div className="container mx-auto px-24 py-6">
        <FilterButtons />
      </div>
    </section>
    <section className="blogs"></section>
    <section className="submit-blog"></section>
    </>
  );
}
