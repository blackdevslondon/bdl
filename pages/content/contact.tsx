import { Navbar } from "../../components/navbar";

const Contact = () => (
  <div>
    <Navbar />
    <div className="md:container md:mx-auto">
      <h1 className="font-bold text-5xl text-center mt-9">Contact Us</h1>
      <article>
        <form action="#" method="POST">
          <label htmlFor="fname" className="block text-sm font-medium">
            First name:
          </label>
          <input type="text" id="fname" name="fname" className="form-input" />
          <label htmlFor="lname" className="block text-sm font-medium">
            Last name:
          </label>
          <input type="text" id="lname" name="lname" className="form-input" />
          <label htmlFor="email" className="block text-sm font-medium">
            Last name:
          </label>
          <input type="text" id="email" name="email" className="form-input" />
          <input type="submit" value="Submit" className="block" />
        </form>
      </article>
    </div>
  </div>
);
export default Contact;
