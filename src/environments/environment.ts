// export const baseUrl = 'http://3.108.5.41/';
export const baseUrl = 'http://localhost:3000/';
// export const baseUrl = 'http://3.109.48.119:3000/';
// export const baseUrl = 'http://13.200.131.26:3000/';
// export const baseUrl = 'https://api-tp.brohit.com/';




export const environment = {
  production: false,
  userLogin: baseUrl + 'auth/login',
  userIsLogin: baseUrl + 'auth/is-logged',
  allUser: baseUrl + 'user/get-all',
  allLessonPlan: baseUrl + 'resources/get-all',
  createLessonPlan: baseUrl + 'resources/create',
  allAssessment: baseUrl + 'assessment/get-all',
  addNewUser: baseUrl + 'auth/signup',
  profile: baseUrl + 'profile/me',
  logout: baseUrl + 'auth/logout',
  allModelConstructivist: baseUrl + 'model-constructivist/get-all',
  allBehaviorist: baseUrl + 'behaviorist/get-all',
  allExperiential: baseUrl + 'experiential/get-all',

  getModelConstructivist: baseUrl + 'model-constructivist/get',
  getBehaviorist: baseUrl + 'behaviorist/get',
  getExperiential: baseUrl + 'experiential/get',

  createAssessment: baseUrl + 'assessment/create',

  updateProfilePic: baseUrl + 'profile/update-profile-image',

  createBehaviorist: baseUrl + 'behaviorist/create/',
  createModelConstructivist: baseUrl + 'model-constructivist/create/',
  createExperiential: baseUrl + 'experiential/create/'
};
