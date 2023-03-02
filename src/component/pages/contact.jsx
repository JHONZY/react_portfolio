import React from "react"; 
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import '../pages/contact.css'


export default function Contact() {
  return (
	<div className="contact">
		<h1>contact</h1>
		<div id="contact" className="container">
			<div className="context">
				<span><AiOutlineMail /><p>jhonlester0111@gmail.com</p></span>
				<span><AiOutlinePhone /><p>+63 905 521 7805</p></span>
			</div>
			<form action="" method="post">
				<input type="text" name="name" placeholder="Full name"/>
				<input type="text" name="email" placeholder="Your email"/>
				<textarea name="comment" placeholder="Your Message"></textarea>
				<input type="submit" value="Submit" />
			</form>
		</div>
	</div>
  );
}