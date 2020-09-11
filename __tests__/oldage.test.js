import {keyInfo, raceExpect, timeOnEarth} from '../src/js/blscripts.js';


describe('old age test', () => {

  let userInfo;

  beforeEach(() => {
    userInfo = new keyInfo(90,'African American');
  });

  test('should return a user info object with 90 as age and african american as race', () => {
    expect(userInfo.age).toEqual(90);
    expect(userInfo.race).toEqual('African American');
  });

  test('should return a the number of years a user has exceeded average life expectancy for their race demo on Earth', () => {
    expect(userInfo.timeOnEarth()).toEqual(15);
    
  });

  test('should return a the number of years a user has exceeded average life expectancy for their race demo on Mercury', () => {
    expect(userInfo.timeOnMercury()).toEqual(63);
    
  });

  test('should return a the number of years a user has exceeded average life expectancy for their race demo on Venus', () => {
    expect(userInfo.timeOnVenus()).toEqual(24);
    
  });

  test('should return a the number of years a user has exceeded average life expectancy for their race demo on Mars', () => {
    expect(userInfo.timeOnMars()).toEqual(8);
    
  });

  test('should return a the number of years a user has exceeded average life expectancy for their race demo on Jupiter', () => {
    expect(userInfo.timeOnJupiter()).toEqual(1);
    
  });

});