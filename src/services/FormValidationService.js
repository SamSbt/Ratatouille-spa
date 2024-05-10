class FormValidationService {
  static isNotEmpty(value) {
    return value.trim() !== ""; // Vérifie si la valeur n'est pas vide
  }

  static isValidEmail(inputEmail) {
    // Utilise une expression régulière pour valider l'email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
  }

//.....
}

export default FormValidationService;
