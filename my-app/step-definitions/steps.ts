import { Given } from '@wdio/cucumber-framework';

const waitElementById = async (id: any) => {
  const selector = 'new UiSelector().resourceId("landing-countryButton")';
  const element = await $(`android=${selector}`);
  await element.waitForDisplayed();
  await element.waitForEnabled();
  await element.waitForExist();
};

const clickElementById = async (id: any) => {
  const selector = 'new UiSelector().resourceId("landing-countryButton")';
  const element = await $(`android=${selector}`);
  await element.click();
};

const waitAMoment = (time: number) =>
  new Promise((resolve) => {
    console.log('Waiting...');
    setTimeout(() => {
      resolve(true);
      console.log('Done waiting.');
    }, time);
  });

Given(/^I wait for element "([^"]*)?"$/, waitElementById);

Given(/^I click on element "([^"]*)?"$/, clickElementById);

Given(/^I open the app$/, () => {
  //nothing
});

Given(/^I wait a moment "([^"]*)?"$/, waitAMoment);
