// login.test.js
const validateLogin = require('./login');

describe('Login API Logic Tests', () => {
  
  test('Valid login returns success', () => {
    expect(validateLogin('admin', 'password123')).toEqual({ success: true });
  });

  test('Empty username and password returns error', () => {
    expect(validateLogin('', '')).toEqual({ success: false, message: 'Empty fields' });
  });

  test('Invalid login returns error', () => {
    expect(validateLogin('wrongUser', 'wrongPass')).toEqual({ success: false, message: 'Invalid credentials' });
  });

  test('Empty username returns error', () => {
    expect(validateLogin('', 'password123')).toEqual({ success: false, message: 'Empty fields' });
  });

  test('Empty password returns error', () => {
    expect(validateLogin('admin', '')).toEqual({ success: false, message: 'Empty fields' });
  });

});
