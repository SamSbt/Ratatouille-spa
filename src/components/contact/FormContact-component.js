import Component from "../Component.js";
import FormValidationService from "../../services/FormValidationService.js";

export default class FormContactComponent extends Component {
  isValid() {
    let inputName = document.getElementById("inputName").value;
    let inputEmail = document.getElementById("inputEmail").value;
    let inputSubject = document.getElementById("inputSubject").value;
    let textareaContact = document.getElementById("textareaContact").value;

    const verifElements = document.querySelectorAll(".verif");
    verifElements.forEach((element) => {
      element.innerHTML = ""; // Réinitialiser les messages de vérification
    });

    if (!FormValidationService.isNotEmpty(inputName)) {
      document.getElementById("verifName").innerHTML = "Veuillez saisir votre nom.";
      console.log("verifName");
    }
    if (!FormValidationService.isValidEmail(inputEmail)) {
      document.getElementById("verifEmail").innerHTML = "Veuillez saisir une adresse email valide.";
      console.log("verifEmail");
    }
    if (!FormValidationService.isNotEmpty(inputSubject)) {
      document.getElementById("verifSubject").innerHTML = "Veuillez saisir un objet.";
      console.log("verifSubject");
    }
    if (!FormValidationService.isNotEmpty(textareaContact)) {
      document.getElementById("verifTextarea").innerHTML = "Veuillez saisir un message.";
      console.log("verifTextarea");
    }

    inputEmail.addEventListener("keydown", () => {
      isValid();
    });
  }

  render() {
    return `
      <div class="container-fluid position-relative mx-auto pt-1 mb-4">
          <section class="container rounded-4 bg-body-tertiary bg-opacity-75 p-4 mt-2 mx-auto mb-2">

          <form class="container" novalidate>
            <h2 class="d-flex justify-content-center mt-2 mb-4">Contactez-nous</h2>
            
            <div class="row align-items-center">
              <div class="col-6">
                <input type="text" id="inputName" name="inputName" class="form-control" placeholder="Votre Nom">
                <p id="verifName" class="verif"></p>
              </div>
              

              <div class="col-6">
                <input type="email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Votre Email">
                <p id="verifEmail" class="verif"></p>
              </div>
              

              <div class="row subject mt-4 mb-3">
                <div class="col">
                  <input type="text" id="inputSubject" name="inputSubject" class="form-control" placeholder="Objet de votre message">
                  <p id="verifSubject" class="verif"></p>
                </div>
                
              </div>
            </div>

            <div class="row mt-2">
              <div>
                <textarea class="form-control" id="textareaContact" name="textareaContact" placeholder="Votre Message..." rows="5"></textarea>
                <p id="verifTextarea" class="verif"></p>
              </div>
              
            </div>
          </form>
          <div class="mt-4 mb-2 d-flex justify-content-center">
            <button type="button" class="btn btn-light poppins-medium">Envoyer</button>
          </div>

          </section>
      </div>
            `;
  }
}
customElements.define("formcontact-component", FormContactComponent);
