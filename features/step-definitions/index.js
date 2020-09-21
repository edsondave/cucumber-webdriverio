var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When('I open the sign up screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('wrongemail@example.com');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('123467891');
});

When('I fill a right email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('box@example.com');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('Contrasena');
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

When('I try to sign up', () => {
  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('button=Registrarse').click();
});

Then('I expect to not be able to login', () => {
  $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

Then('I expect to be able to login', () => {
  $('#cuenta').waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.keys(email);

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password)
});

Then('I expect to see {string}', error => {
  $('.aviso.alert.alert-danger').waitForDisplayed(5000);
  var alertText = browser.$('.aviso.alert.alert-danger').getText();
  expect(alertText).to.include(error);
});

When(/^I fill the sign up form with (.*), (.*), (.*), (.*), (.*)$/, (name, lastname, email, password, termsAccepted) => {
  var cajaSignUp = $('.cajaSignUp');

  var nameInput = cajaSignUp.$('input[name="nombre"]');
  nameInput.click();
  nameInput.keys(name);
  
  var lastNameInput = cajaSignUp.$('input[name="apellido"]');
  lastNameInput.click();
  lastNameInput.keys(lastname);
  
  var emailInput = cajaSignUp.$('input[name="correo"]');
  emailInput.click();
  emailInput.keys(email);
  
  var passwordInput = cajaSignUp.$('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password);
  
  if (termsAccepted == 'true') {
	  var termsAcceptedInput = cajaSignUp.$('input[name="acepta"]');
	  termsAcceptedInput.click();
  }
  
});

Then(/^I expect the div (.*)$/, wrongField => {
  $(wrongField).waitForDisplayed(5000);
});