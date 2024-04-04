
const Faq = () => {
  return (
    <div className="container mx-auto">
        <div >
            <img src="https://www.jharrojgar.com/assets/images/faq.gif" className="text-center mx-auto" alt="" />
        </div>
        <div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        1. What genres of books do you offer?
        </div>
        <div className="collapse-content">
          <p>We offer a diverse range of genres, including fiction, non-fiction, mystery, romance, science fiction, fantasy, self-help, biography, and many more. Whether you're a fan of thrilling mysteries or thought-provoking literary fiction, you'll find something to suit your tastes.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        2. Can I find both new releases and classic titles on your website?
        </div>
        <div className="collapse-content">
          <p>Yes, our collection includes a mix of new releases and timeless classics. Whether you're looking for the latest bestseller or a beloved classic that has stood the test of time, we've got you covered.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        3. Are the book descriptions on your website detailed?
        </div>
        <div className="collapse-content">
          <p>Absolutely! We provide comprehensive book descriptions that include summaries, author bios, reviews, and other relevant information to help you make informed decisions about your purchases.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        4. Do you offer book recommendations or reading lists?
        </div>
        <div className="collapse-content">
          <p>Yes, we understand that finding the perfect book can be overwhelming, so we offer curated reading lists and personalized recommendations to help you discover your next great read..</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        5. Are the books on your website available in different formats (e.g., hardcover, paperback, e-book)?
        </div>
        <div className="collapse-content">
          <p>Yes, we understand that finding the perfect book can be overwhelming, so we offer curated reading lists and personalized recommendations to help you discover your next great read..</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2 mb-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        6. Can I find books in languages other than English?
        </div>
        <div className="collapse-content">
          <p>Yes, we understand that finding the perfect book can be overwhelming, so we offer curated reading lists and personalized recommendations to help you discover your next great read..</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Faq;
