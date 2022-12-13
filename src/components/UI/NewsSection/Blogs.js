import blog1 from "../../../img/blog1_img.jpg";
import blog2 from "../../../img/blog2_img.jpg";
import blog3 from "../../../img/blog3_img.jpg";

const Blogs = () => {
  const blogs = [
    {
      img: blog1,
      text: "Ford Kuga Mk3 - Elegancija kao misija | Auto Test Polovni automobili",
    },
    {
      img: blog2,
      text: "OMR Luxury Store: Dobro došli u svet luksuza!",
    },
    {
      img: blog3,
      text: "Da li je dozvoljeno parkiranje na trotoaru?",
    },
  ];

  return (
    <>
      {blogs.map((blog, indexID) => (
        <div className="blog" key={indexID}>
          <img src={blog.img} />
          <p>{blog.text}</p>
        </div>
      ))}
    </>
  );
};

export default Blogs;
