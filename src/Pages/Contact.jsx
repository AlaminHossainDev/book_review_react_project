import React from "react";

const Contact = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg-white">
      <div className="hero-content grid md:grid-cols-2  md:flex-row">
        <div className="text-center md:text-left">
          <img src="https://assets-v2.lottiefiles.com/a/3f3c800e-1168-11ee-8c3b-131af4d303a5/RVW0iShHMK.gif" className="mt-[-30px] w-full z-0" alt="" />
          <h1 className="text-5xl font-bold">Connect with Literary Haven</h1>
          <p className="py-6">
          Have a question, comment, or suggestion? We're here to listen! Whether you're seeking assistance with an order, curious about our offerings, or simply want to share your thoughts, our dedicated team is ready to assist you. Feel free to reach out using the form below, and we'll get back to you as soon as possible. Your feedback matters to us, and we look forward to hearing from you!
          </p>
        </div>
        <div className="card w-full max-auto shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="name"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="name"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <textarea placeholder="Type Your thinking" className="textarea textarea-bordered textarea-lg w-full max-auto" ></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Us Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
