exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['testspec.js'],  
  capabilities: {
    'browserName': 'firefox' // or 'safari'
  }  
  
};