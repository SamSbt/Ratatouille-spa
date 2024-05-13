import ContactCardComponent from "../components/contact/ContactCard-component.js";
import MapComponent from "../components/contact/Map-component.js";
import FormContactComponent from "../components/contact/FormContact-component.js";
import MainScreen from "./Main-Screen.js";

export default class ContactScreen extends MainScreen {
  constructor() {
    super();
    this.props.contactCardComponent = new ContactCardComponent();
    this.props.mapComponent = new MapComponent();
    this.props.formContactComponent = new FormContactComponent();
    this.innerHTML = this.render();
  }

  connectedCallback() {
    const preloader = document.querySelector('#preloader');
    window.addEventListener('load', function () {
      this.preloader.classList.add('fade-out-animation');
    });
  }

  render() {
    return `
    <style>@import "./src/screens/styles/ContactStyle.css"</style>
      <div id="preloader d-flex justify-content-center align-items-center position-fixed top-50 start-50 w-100 h-100">  
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div>${super.render()}</div>
      <div>${this.props.contactCardComponent.render()}</div>
      <div>${this.props.mapComponent.render()}</div>
      <div><formcontact-component /></div>
    `;
  }
}
customElements.define("contact-screen", ContactScreen);
