module.exports = dependencies => ({
  rights: {
    padmin: 'rw',
    user: 'r'
  },
  configurations: {
    activitiURL: require('./activiti-url')(dependencies)
  }
});
