Patient Ingest Form Application
===============================

### Overview

In this task you'll be creating and deploying a simple, client-side, single-page application.

> If you have any questions email me at michael@parsleyhealth.com.

### Requirements

I would like you to create a **multi-step** or **multi-screen** patient ingest form that gathers standard medical data. Here is a list of data points, disease and questions you might want to use: https://github.com/parsleyhealth/dev-test/blob/master/fixtures.md

Here is a suggested organization of the form, but use your best judgement and creativity:

1. **Demographic data**: name, email, address, birthdate, etc
2. **Medical history information**: family history, medications, diseases, allergies
3. **Acceptance of a contract** (lorem ipsum text is fine)
4. **Summary**: show the patient a wrap-up screen with the info they added, and give them a way to go back and edit if there are any mistake
5. **Submit**: On submit, please print the payload you collected to the console. This is your fake API submission.

Please note:

* This is a **single-page application**. There shouldn't be page reloads between screens.
* It would be nice to see your stage as your work through the form

### Time limits

Please spend **no more than 3-hours** on this test. If you can't make it perfect in that time, don't worry, just send me what you've accomplished.

Please turn in your results within **72-hours** of the prompt being given. If that falls during the weekend, then please turn it in by Monday.

> Extensions are available, just ask!

### Evaluation & priorities

Within your brief **3 hour time limit** I hope you'll prioritize the following, in this order. Consider this an iterative process — get it working on sound principles first, then refine and polish as time allows.

1. Make it work!
2. Clean and clear code (hopefully you didn't sacrifice this to make it work)
3. Project organization
4. Planning: tools used, implementation strategy, basic UX concerns like what to ask for where
5. Make it look good - just use Bootstrap, a Material theme, or whatever you're comfortable with
6. Management of data, state, and events internally
7. Code quality details
  - Type, variable, property checking
  - Failing fast, for better debugging
8. Extra polish, concern and care will be noticed

Less important details:

* How you host your project. This is a front-end focused position. Please consider a simple cheap (or free) static file host like **GitHub Pages**, or **S3**.
* The language or framework you use. Please use whatever you are most comfortable with to finish this. (Though I think it might be hard to accomplish the code style and organization objectives above with vanilla JS or jQuery)
* Tests are great, but I doubt you'll have time.

### Delivery of project

* Please place your finished source code on GitHub
* Please host your finished application somewhere (GitHub Pages, Heroku, S3 bucket)
* Email me the repository URL and application URL

> If for some reason you would rather not have your code or application out in the open, please send me a zip file of the source code and instructions on to launch and view the finished application.

### Wrap up

When you've finished the test let me know by email: michael@parsleyhealth.com

We will then schedule a short wrap up call to go over your results and the thinking you applied to this project.

### Hints

* Be efficient! Please don’t reinvent the wheel, use [boilerplates](https://redux-minimal.js.org), [generators](https://github.com/angular/angular-seed) and other [tools](http://redux-form.com/6.6.3/) when they speed up your process and get you to your end goal faster.
