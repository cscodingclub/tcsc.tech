import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="main_contact">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="cont1">
          <table>
            <tr>
              <td>Email:- </td>
              <td>codingclubcs@gmail.com</td>
            </tr>
            <tr>
              <td>Number:- </td>
              <td>9699516755</td>
            </tr>
            <tr>
              <td>Address:- </td>
              <td>Thakur College Of Science and Commerce</td>
            </tr>
            <tr>
              <td colSpan={2}>Department Of Computer Science</td>
            </tr>
          </table>
        </div>
        <div className="cont2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7481421384878!2d72.8717225751122!3d19.206199747872386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b738c9e09369%3A0x4be91c068af00f54!2sThakur%20College%20of%20Science%20and%20Commerce!5e0!3m2!1sen!2sin!4v1719397454473!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
