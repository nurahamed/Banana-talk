### Language Translator Web App

#### Overview

Welcome to the Language Translator web app! This simple application allows users to translate text into fun languages like Minion Speak, Yoda Speak, and Groot Speak. Users can select the language they want and enter text for translation. The translated text is then displayed on the screen.

#### Features

1. **Language Selection:**
   - Users can choose from three languages: Minion, Yoda, and Groot.
   - The selected language is highlighted on the interface, and the background color changes accordingly.

2. **Translation Functionality:**
   - The application utilizes the Fun Translations API to convert input text into the chosen language.
   - Translated text is displayed on the screen.

3. **Error Handling:**
   - If there's an issue with the API or server, an error message is displayed, guiding users to try again later.

4. **Translation Success Alert:**
   - When the translation is successful, an alert appears, notifying the user of the successful translation.

5. **Usage Limit Alert:**
   - Users are alerted if they reach the maximum translation limit. They are advised to choose another language or wait for some time.

6. **Copy to Clipboard (Commented Out):**
   - A feature to copy the translated text to the clipboard is available but commented out. Users can uncomment and use this feature if needed.

#### How to Use

1. Enter text in the input field.
2. Choose a language (Minion, Yoda, or Groot).
3. Click the "Translate" button.
4. View the translated text on the screen.
5. Receive alerts for successful translations, errors, or reaching the translation limit.

#### Notes

- **Server URLs:**
  - The server URLs for Minion, Yoda, and Groot translations are defined in the `urlData` object.
  - Users can easily modify or add more translation options by updating the URLs in the `urlData` object.

#### Limitations

- The application has a translation limit, and users are notified when they reach this limit.

#### How to Contribute

1. Fork the repository.
2. Create a branch: `git checkout -b feature/new-feature`.
3. Make changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Create a pull request.

#### License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize this template according to your specific project details and requirements.
